import sharp from 'sharp'

// Resize the image to a set resolution on the server side
export const resizeImage = async (file: File) => {
  console.log('file:', file)
  const resizedImage = sharp((await file.arrayBuffer()) as any)
    .resize(400, 400)
    .jpeg({ quality: 100 })

  console.log('resizedImage:', resizedImage)
  return resizedImage
}
