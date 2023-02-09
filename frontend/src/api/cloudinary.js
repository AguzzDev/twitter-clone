export const fileUpload = async (file) => {
  const cloudUrl = process.env.REACT_APP_CLOUDINARY_URL

  let data = []
  for (let x = 0; x < file.length; x++) {
    const formData = new FormData()
    formData.append("upload_preset", "Twitter")
    formData.append("cloud_name", process.env.REACT_APP_CLOUDINARY_NAME)
    formData.append("file", file[x].image)

    try {
      const resp = await fetch(cloudUrl, {
        method: "POST",
        body: formData,
      })
      if (resp.ok) {
        const cloudResp = await resp.json()
        data.push(cloudResp.secure_url)
      } else {
        throw await resp.json()
      }
    } catch (err) {
      throw err
    }
  }
  return data
}
