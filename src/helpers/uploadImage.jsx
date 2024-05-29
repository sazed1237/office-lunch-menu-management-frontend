

const uploadImage = async (image) => {
    const url = `https://api.cloudinary.com/v1_1/ddtvwvki1/image/upload` 

    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", "helps_electronics")

    const dataResponse = await fetch(url, {
        method: 'post',
        body: formData
    })

    return dataResponse.json()
}

export default uploadImage 