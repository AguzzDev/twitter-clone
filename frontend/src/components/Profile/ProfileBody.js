import {
  ArrowLeftIcon,
  LocationMarkerIcon,
  CakeIcon
} from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { IconsSm } from 'components/icons'
import { getUser } from 'utils/getUser'
import { ModalImageProfile } from 'components/Modal/ModalImageProfile'
import { deleteAccount } from 'store/actions/auth'
import { ModalProfile } from 'components/Modal/ModalProfile'

export const ProfileBody = ({ profile, query, tweets, userData }) => {
  const dispatch = useDispatch()

  return (
    <>
      {profile && getUser ? (
        <section className='flex flex-col py-2'>
          <div className='flex items-center w-full border-b border-graylight dark:border-bordes'>
            <Link
              to='/home'
              className='ml-3 mr-5 cursor-pointer dark:text-graylight text-bodylight'
            >
              <IconsSm Icon={ArrowLeftIcon} />
            </Link>
            <div className='mb-1 leading-3'>
              <h1 className='text-xl font-bold dark:text-white'>
                {profile.name}
              </h1>

              <p className='text-sm text-gray1 dark:text-graylight'>
                {tweets} Tweets
              </p>
            </div>
          </div>
          <div className='relative'>
            <ModalImageProfile profile={profile} />
          </div>
          <div className='relative select-none'>
            <div className='flex justify-end w-full h-12 px-5'>
              {/* {userData.username == `@${query}` ? <ModalProfile user={userData} /> : null} */}
              {userData.role === 'own' && userData.username != `@${query}` && (
                <button
                  onClick={() => dispatch(deleteAccount(profile._id))}
                  className='px-3 py-1 font-medium border rounded-full dark:text-white border-gray1'
                >
                  Borrar cuenta
                </button>
              )}
            </div>

            <div className='flex flex-col w-full px-5'>
              <div>
                <h1 className='text-xl font-bold dark:text-white'>
                  {profile.name}
                </h1>
                <h5 className='font-bold text-gray1'>{profile.username}</h5>
              </div>
              <p className='my-2 dark:text-white'>{profile.description} </p>
              <div className='flex flex-col space-y-1'>
                <div className='flex items-center text-sm text-gray-500 dark:text-gray1 '>
                  <IconsSm Icon={LocationMarkerIcon} />
                  <p className='ml-2'>{profile.location}</p>
                </div>
                <div className='flex items-center text-sm text-gray-500 dark:text-gray1 '>
                  <IconsSm Icon={CakeIcon} />
                  <p className='ml-2'>
                    Fecha de nacimiento: {profile.dia}/{profile.mes}/
                    {profile.anio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
