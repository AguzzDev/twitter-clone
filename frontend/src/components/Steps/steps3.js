import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import Dropzone from 'react-dropzone'

import { LayoutStep } from './LayoutStep'
import { FieldInput } from 'components/Input/FieldInput'
import { register } from 'store/actions/auth'
import { useDropzone } from 'hooks/useDropzone'

export default function Steps3 ({ formData, navigation }) {
  const { data, dropzoneFiles } = useDropzone()

  const dispatch = useDispatch()
  const history = useHistory()

  const { error } = useSelector((state) => state.auth)
  return (
    <LayoutStep>
      <Formik
        initialValues={{
          description: '',
          location: 'Internet'
        }}
        onSubmit={async (values, actions) => {
          const value = { ...values, ...formData, ...data }
          await dispatch(register(value, history))
          actions.setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form className='flex flex-col mt-3' autoComplete='off'>
            <section>
              <Dropzone
                maxFiles={1}
                onDrop={(acceptedFiles) =>
                  dropzoneFiles(acceptedFiles, 'userBanner')}
              >
                {({ getRootProps, getInputProps, isDragActive }) => (
                  <div
                    className='h-40 max-h-40 overflow-hidden mb-2'
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    <img
                      src={data.userBanner}
                      className='w-full h-full object-cover'
                    />
                    {isDragActive && <p>MERCA</p>}
                  </div>
                )}
              </Dropzone>
              <Dropzone
                maxFiles={1}
                onDrop={(acceptedFiles) =>
                  dropzoneFiles(acceptedFiles, 'userImage')}
              >
                {({ getRootProps, getInputProps, isDragActive }) => (
                  <div
                    className='relative w-20 h-20 max-w-20 max-h-20 rounded-full overflow-hidden'
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    <img
                      src={data.userImage}
                      className='w-full h-full object-cover'
                    />
                    {isDragActive && <p>MERCA</p>}
                  </div>
                )}
              </Dropzone>
            </section>

            <section className='flex my-5'>
              <div className='flex flex-col space-y-2 w-full'>
                <FieldInput label='Biografia' name='description' />
                <FieldInput label='Ubicacion' name='location' />
              </div>
            </section>
            {error && <p className='text-red-500'>{error}</p>}
            <button
              disabled={isSubmitting}
              type='submit'
              className='w-full py-2 font-bold rounded-full bg-blue1 mt-5'
            >
              Registrarse
            </button>
            <button
              onClick={() => navigation.previous()}
              className='w-full py-2 font-bold rounded-full bg-blue1 mt-5'
            >
              Volver
            </button>
          </Form>
        )}
      </Formik>
    </LayoutStep>
  )
}
