import Resizer from 'react-image-file-resizer'

export const resizeImage = (file: File) =>
  new Promise<string>((resolve) => {
    Resizer.imageFileResizer(
      file,
      400,
      400,
      'JPEG',
      100,
      0,
      (uri: any) => {
        resolve(uri)
      },
      'file',
    )
  })
