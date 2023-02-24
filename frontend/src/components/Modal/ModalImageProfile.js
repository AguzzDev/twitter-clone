import { XIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import Modal from 'react-modal'
import { IconsSm } from '../icons'

export const ModalImageProfile = ({ profile }) => {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  const ModalBody = ({ type, close }) => {
    return (
      <div>
        <button onClick={close}>
          <IconsSm Icon={XIcon} />
        </button>

        {type === 'userImage'
          ? (
            <img
              src={profile.userImage}
              className='w-[20rem] h-[20rem] m-auto object-cover rounded-full border-4 border-white dark:border-body'
            />
            )
          : (
            <div>
              <img
                src={profile.userBanner}
                className='w-[80vw] h-[60vh] m-auto object-cover border-4 border-white dark:border-body'
              />
            </div>
            )}
      </div>
    )
  }

  return (
    <>
      <button onClick={() => setOpen1(true)} className='w-full h-[13rem]'>
        <img src={profile.userBanner} className='object-cover w-full h-full cursor-pointer dark:border-body hover:opacity-90' />
      </button>
      <Modal
        isOpen={open1}
        onRequestClose={() => setOpen1(false)}
        className='modal-profileimage'
        overlayClassName='modal-fondo'
      >
        <ModalBody type='userBanner' close={() => setOpen1(false)} />
      </Modal>

      <div className='absolute bg-white rounded-full top-32 left-5 dark:bg-body'>
        <button onClick={() => setOpen2(true)}>
          <img
            src={profile.userImage}
            className='w-32 h-32 object-cover border-4 border-white rounded-full cursor-pointer dark:border-body hover:opacity-90'
          />
        </button>
        <Modal
          isOpen={open2}
          onRequestClose={() => setOpen2(false)}
          className='modal-profileimage'
          overlayClassName='modal-fondo'
        >
          <ModalBody type='userImage' close={() => setOpen2(false)} />
        </Modal>
      </div>
    </>
  )
}
