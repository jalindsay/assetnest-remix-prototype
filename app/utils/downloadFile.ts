import type { StorageClient } from '@supabase/storage-js'

export const downloadFile = async (
  storageClient: StorageClient,
  filePath: string,
  fileNameWithExtension: string,
) => {
  const blob = await storageClient.from('assetnest').download(filePath)
  if (blob.data) {
    const url = window.URL.createObjectURL(blob.data)
    const link = document.createElement('a')
    link.href = url
    link.download = fileNameWithExtension
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}
