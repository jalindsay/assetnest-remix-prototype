import type { LoaderFunctionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node'
import { Outlet, useLoaderData, useNavigate } from '@remix-run/react'
import Button from '~/components/ui/Button'
import { Icon } from '~/components/ui/Icon'
import { getSession } from '~/cookies'
import { getMembershipWithUserAndOrganisation } from '~/endpoints/membership'
import { secondaryText } from '~/styles/typography'

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'))
  const userId = session.get('userId')

  const membership = await getMembershipWithUserAndOrganisation({
    userId: userId ?? -1,
    orgId: parseInt(params.orgId ?? '-1'),
  })

  if (membership === null || membership.status !== 'ACTIVE') {
    return redirect(`/organisationList`)
  }
  return { orgId: params.orgId }
}

export default function OrgWrapper() {
  const loaderData = useLoaderData<typeof loader>() as {
    orgId: string | undefined
  }
  const navigation = useNavigate()

  return (
    <div
      className={'flex h-full w-full flex-col overflow-y-scroll md:flex-row'}
    >
      <div
        className={
          ' relative flex h-[calc(100%-64px)] w-24 flex-col items-center  bg-white  max-md:hidden'
        }
      >
        <div className="flex h-20 items-center justify-center md:block md:h-1/2">
          <div className="py-5 pt-10">
            <div className="flex flex-col items-center justify-center p-2 text-center">
              <Button
                variant="ghost"
                size="icon"
                className="max-md:hidden"
                onClick={() => {
                  navigation('/' + loaderData.orgId + '/assetList')
                }}
                noPadding
              >
                <Icon
                  className=" flex items-center justify-center p-1"
                  icon="trophy"
                />
              </Button>
              <div className={` text-sm ${secondaryText}`}>Assets</div>
            </div>
          </div>
          <div className=" py-5 ">
            <div className="flex flex-col items-center  justify-center p-2 text-center">
              <Button
                variant="ghost"
                size="icon"
                className="max-md:hidden"
                onClick={() => {
                  navigation('/' + loaderData.orgId + '/inspections/list')
                }}
              >
                <Icon
                  className=" flex items-center justify-center p-1"
                  icon="pasteClipboard"
                />
              </Button>
              <div className={` text-sm ${secondaryText}`}>Inspections</div>
            </div>
          </div>
          <div className="py-5 ">
            <div className="flex flex-col items-center  justify-center p-2 text-center">
              <Button variant="ghost" size="icon" className="max-md:hidden">
                <Icon
                  className=" flex items-center justify-center p-1"
                  icon="warning"
                />
              </Button>
              <div className={` text-sm ${secondaryText}`}>Defects</div>
            </div>
          </div>
          <div className="py-5 ">
            <div className="flex flex-col items-center  justify-center p-2 text-center">
              <Button variant="ghost" size="icon" className="max-md:hidden">
                <Icon
                  className=" flex items-center justify-center p-1"
                  icon="wrench"
                />
              </Button>
              <div className={` text-sm ${secondaryText}`}>Maintenance</div>
            </div>
          </div>
        </div>
        <div className=" hidden flex-col justify-end md:flex  md:h-1/2 ">
          <div className=" w-full   p-2 ">
            <div className="h-[1px] bg-black" />
          </div>
          <div className=" py-5 ">
            <div className="flex flex-col items-center  justify-center p-2 text-center">
              <Button
                title="Organisation Details"
                variant="ghost"
                size="icon"
                className="max-md:hidden"
                onClick={() => {
                  navigation('/' + loaderData.orgId + '/organisationDetails', {
                    relative: 'path',
                  })
                }}
              >
                <Icon
                  className=" flex items-center justify-center p-1"
                  icon="group"
                />
              </Button>
              <div className={` text-sm ${secondaryText}`}>
                Manage Organisation
              </div>
            </div>
          </div>
          <div className=" py-5 ">
            <div className="flex flex-col items-center justify-center p-2 text-center">
              <Button
                title="Logout"
                variant="ghost"
                size="icon"
                className="max-md:hidden"
                onClick={() => {
                  navigation('/organisationList')
                }}
              >
                <Icon
                  className=" flex items-center justify-center p-1"
                  icon="exitDoor"
                />
              </Button>
              <div className={` text-sm ${secondaryText}`}>Organisations</div>
            </div>
          </div>
        </div>
      </div>
      <div className={'flex w-full flex-col  items-center justify-center '}>
        <div className={' w-full self-start overflow-auto p-5 md:h-full'}>
          <Outlet />
          <div className="min-h-[2rem] max-md:hidden" />
        </div>
        <div className="min-h-[10rem] md:hidden" />
      </div>

      <div
        className={
          'absolute bottom-0 flex h-20 w-full items-center justify-center bg-white shadow-[0px_-4px_12px_0px_rgba(217,217,217,0.40)] md:hidden'
        }
      >
        <div className="flex w-1/4 justify-center p-5">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              navigation('/' + loaderData.orgId + '/assetList')
            }}
          >
            <Icon
              className=" flex items-center justify-center p-1"
              icon="trophy"
            />
          </Button>
        </div>
        <div className="flex w-1/4 justify-center p-5">
          <Button variant="ghost" size="icon">
            <Icon
              className=" flex items-center justify-center p-1"
              icon="pasteClipboard"
            />
          </Button>
        </div>
        <div className="flex w-1/4 justify-center p-5">
          <Button variant="ghost" size="icon">
            <Icon
              className=" flex items-center justify-center p-1"
              icon="warning"
            />
          </Button>
        </div>
        <div className="flex w-1/4 justify-center p-5">
          <Button variant="ghost" size="icon">
            <Icon
              className=" flex items-center justify-center p-1"
              icon="wrench"
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
