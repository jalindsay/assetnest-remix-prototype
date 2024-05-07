import {StorageClient} from '@supabase/storage-js'

export const getStorage = () => {
  return new StorageClient(process.env.STORAGE_URL ?? '', {
    apikey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
    Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''}`,
  })
}
