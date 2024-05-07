import type { LoaderFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
import { Layout } from '~/components/ui/Layout'
import { getSession } from '~/cookies'
import { getUserId } from '~/endpoints/user'
import Account from '../assets/account.svg'
import { getStorage } from '~/utils/storage.server'
import { getOrganisation } from '~/endpoints/organisation'

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'))

  const userId = session.get('userId')

  const currentUser = await getUserId(userId ?? -1)

  if (userId) {
    const loggedInUser = await getUserId(userId)
    const organisation = params.orgId
      ? await getOrganisation(parseInt(params.orgId ?? '-1'))
      : undefined

    if (loggedInUser) {
      //get image
      let imageUrl
      if (currentUser?.image) {
        const imageName = currentUser?.image ?? ''
        const storageClient = getStorage()
        const profilePicUrlObject =
          storageClient
            .from('assetnest')
            .getPublicUrl('profile-picture/' + imageName) ?? ''
        imageUrl = profilePicUrlObject?.data?.publicUrl ?? ''
      }

      // Get the public URL of the organisation icon from the storage client.
      let orgImageUrl
      if (organisation?.icon) {
        const imageName = organisation?.icon ?? ''
        const storageClient = getStorage()
        const orgPicUrlObject =
          storageClient
            .from('assetnest')
            .getPublicUrl('organisations/' + imageName) ?? ''
        orgImageUrl = orgPicUrlObject?.data?.publicUrl ?? ''
      }

      return {
        firstName: currentUser?.firstName ?? '',
        lastName: currentUser?.lastName ?? '',
        profileImage: imageUrl,
        organisationName: organisation?.name ?? '',
        organisationIcon: orgImageUrl,
      }
    } else {
      return redirect(`/logIn`)
    }
  }
  return redirect(`/logIn`)
}

export function shouldRevalidate({
  currentParams,
  nextParams,
  defaultShouldRevalidate,
}: {
  currentParams: { orgId?: string }
  nextParams: { orgId?: string }
  defaultShouldRevalidate: boolean
}) {
  if (currentParams.orgId !== nextParams.orgId) {
    return true
  }
  return defaultShouldRevalidate
}

const SignedIn = () => {
  const loaderData = useLoaderData<typeof loader>() as {
    firstName?: string
    lastName?: string
    profileImage?: string
    organisationName?: string
    organisationIcon?: string
  }

  const profileInitials =
    (loaderData?.firstName?.at(0)?.toUpperCase() ?? '') +
    (loaderData?.lastName?.at(0)?.toUpperCase() ?? '')

  return (
    <Layout
      profileInitials={profileInitials === '' ? undefined : profileInitials}
      profileImage={
        loaderData?.profileImage
          ? loaderData?.profileImage
          : profileInitials === ''
          ? Account
          : profileInitials
      }
      organisationName={loaderData?.organisationName}
      organisationIcon={loaderData?.organisationIcon}
    >
      <Outlet />
    </Layout>
  )
}

export default SignedIn
