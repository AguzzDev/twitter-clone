import { useState } from 'react'

export const useDropzone = () => {
  const [data, setData] = useState({
    userImage: '/AvatarDefault.png',
    userBanner: '/Twitter-banner.png'
  })

  const dropzoneFiles = (files, field) => {
    files.map((file) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        setData((prev) => {
          return { ...prev, [field]: e.target.result }
        })
      }
      reader.readAsDataURL(file)
    })
  }

  return {
    data,
    dropzoneFiles
  }
}
