import { SearchIcon } from '@heroicons/react/solid'
import { IconsSm } from 'components/icons'
import { useSearch } from 'hooks/useSearch'

export const SearchInput = ({ props }) => {
  const { setValue, handleSubmit } = useSearch()

  return (
    <div
      className={`group flex bg-graylight dark:bg-blue2 p-2 rounded-full border border-blue2 focus-within:border-blue1 hover:border-opacity-100 ${props}`}
    >
      <div className='flex my-auto text-gray1 mx-2'>
        <IconsSm Icon={SearchIcon} props='group-focus-within:text-blue1' />
      </div>

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          placeholder='Buscar en Twitter'
          className='placeholder-base bg-transparent dark:text-white outline-none w-full'
        />
      </form>
    </div>
  )
}
