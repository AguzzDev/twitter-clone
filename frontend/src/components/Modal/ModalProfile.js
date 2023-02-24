import React, { useState } from 'react'
import { XIcon } from '@heroicons/react/solid'
import { Form, Formik } from 'formik'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import Dropzone from 'react-dropzone'

import { IconsSm } from '../icons'
import { updateProfile } from 'store/actions/profile'
import { useDropzone } from 'hooks/useDropzone'
import { FieldInput } from 'components/Input/FieldInput'

export const ModalProfile = async ({ user }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const { data, dropzoneFiles } = useDropzone()

  return (
    <>
      {user && (
        <>
          <button
            onClick={() => setOpen(true)}
            className='px-3 py-1 font-medium border rounded-full dark:text-white border-gray1'
          >
            Editar Perfil
          </button>
          <Modal
            isOpen={open}
            onRequestClose={() => setOpen(false)}
            className='modal-changeProfile'
            overlayClassName='modal-fondo'
          >
            <Formik
              initialValues={{
                name: user.name,
                description: user.description,
                location: user.location
              }}
              onSubmit={async (values) => {
                await dispatch(updateProfile({ ...values, ...data }))
                setOpen(false)
              }}
            >
              {() => (
                <Form
                  className='bg-white dark:bg-body rounded-xl min-w-[40vw]'
                  autoComplete='off'
                >
                  <section className='flex justify-between p-2'>
                    <div className='flex space-x-3 items-center'>
                      <button
                        onClick={() => setOpen(false)}
                        className='font-medium rounded-lg dark:text-white'
                      >
                        <IconsSm Icon={XIcon} />
                      </button>

                      <h1 className='text-xl font-bold dark:text-white'>
                        Editar perfil
                      </h1>
                    </div>
                    <button
                      type='submit'
                      className='px-3 py-2 font-bold rounded-xl'
                    >
                      Guardar
                    </button>
                  </section>

                  <section className='pb-5'>
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
                    <div className='flex space-x-5 mx-5'>
                      <Dropzone
                        maxFiles={1}
                        onDrop={(acceptedFiles) =>
                          dropzoneFiles(acceptedFiles, 'userImage')}
                      >
                        {({ getRootProps, getInputProps, isDragActive }) => (
                          <div
                            className='relative w-24 h-24 max-w-24 max-h-24 rounded-full overflow-hidden'
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

                      <div className='flex flex-col flex-1 space-y-3'>
                        <FieldInput label='Nombre' name='name' />
                        <FieldInput label='Biografia' name='description' />
                        <FieldInput label='Ubicacion' name='location' />
                      </div>
                    </div>
                  </section>
                </Form>
              )}
            </Formik>
          </Modal>
        </>
      )}
    </>
  )
}
