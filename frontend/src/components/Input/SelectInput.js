import { ChevronDownIcon } from '@heroicons/react/solid'
import { Field, useField } from 'formik'
import { IconsMd } from '../icons'

export const SelectInput = ({ label, data, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className='flex flex-col flex-1'>
      <div className='py-4 flex bg-black border rounded-sm border-bordes focus-within:border-blue1'>
        <label className='mx-2'> {label} </label>
        <Field
          component='select'
          className='w-full bg-black outline-none p-2'
          autoComplete='off'
          {...field}
          {...props}
        >
          {data.map(({ value, text }, i) => (
            <option key={i} value={value}>
              {text}
            </option>
          ))}
        </Field>
        <IconsMd Icon={ChevronDownIcon} />
      </div>
      {meta.touched && meta.error
        ? (
          <p className='text-xs text-red-500 mt-3'>{meta.error}</p>
          )
        : null}
    </div>
  )
}
