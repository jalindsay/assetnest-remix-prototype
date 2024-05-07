import {StorageClient} from '@supabase/storage-js'

export const getStorageClient = (
  STORAGE_URL: string,
  SUPABASE_SERVICE_ROLE_KEY: string,
) => {
  return new StorageClient(STORAGE_URL, {
    apikey: SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
  })
}
