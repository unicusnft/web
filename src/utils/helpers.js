const LOCAL_STORAGE_CURRENT_USER = 'unicus-current-user'

export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const LocalStorageGetCurrentUser = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_CURRENT_USER))
}

export const LocalStorageSeCurrentUser = (user) => {
  localStorage.setItem(LOCAL_STORAGE_CURRENT_USER, JSON.stringify(user))
}

export const processImage = async (file, width, height) => {
  const getBase64 = (file) => new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      resolve(reader.result)
    }
    reader.onerror = function (error) {
      reject(error)
    }
  })

  const data = await getBase64(file)
  return await cropImage(data)

};

const cropImage = async (dataUrl) => {
  const originalImage = new Image()
  originalImage.src = dataUrl

  const cropJob = new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    originalImage.addEventListener('load', function () {

      const minDim = Math.min(originalImage.width, originalImage.height)
      canvas.width = minDim
      canvas.height = minDim

      //draw the image
      ctx.drawImage(
        originalImage,
        (originalImage.width - minDim) / 2,
        (originalImage.height - minDim) / 2,
        minDim,
        minDim,
        0,
        0,
        minDim,
        minDim
      )

      resolve(canvas.toDataURL("image/jpeg", 0.9))
    })
  })

  return await cropJob
}

export const isValidImage = (file) => {
  return file.size / 1024 <= 1024
}

export const objectHasEmptyAttrs = (obj, keys) => {
  return !Object?.entries(obj)?.every(([k, v], _i) => {
    return (!keys?.includes(k))
      || (!Array.isArray(v) && v?.length !== 0)
      || (Array.isArray(v) && v.every(e => !objectHasEmptyAttrs(e, keys)))
  })
}
