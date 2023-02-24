import { Field, useField } from 'formik'

export const FieldInput = ({ label, children, showPassword, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <div className='py-1 w-full border border-gray-500 rounded-md focus-within:border-blue1'>
        <label className='mx-2'> {label} </label>
        <div className={`${children ? 'pr-2' : null} flex justify-between`}>
          {children
            ? (
              <Field
                className='w-full bg-transparent outline-none pt-1'
                type={showPassword ? 'text' : 'password'}
                {...props}
                {...field}
              />
              )
            : (
              <Field
                className='w-full bg-transparent outline-none pt-1'
                type={!props.type ? 'text' : null}
                {...field}
                {...props}
              />
              )}
          {children}
        </div>
      </div>
      {meta.touched && meta.error
        ? (
          <p className='text-xs text-red-500'>{meta.error}</p>
          )
        : null}
    </>
  )
}
