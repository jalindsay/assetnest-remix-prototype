import { useNavigate } from '@remix-run/react'
import AssetNestLogo from '~/assets/Logos/AssetNestLogo.svg'
import IconLogo from '~/assets/Logos/IconLogo.svg'
import { Avatar } from './Avatar'
import { Icon } from './Icon'

interface IProps {
  nonAuth?: boolean
  children: React.ReactNode
  profileImage?: string
  profileInitials?: string
  organisationName?: string
  organisationIcon?: string
}

export const Layout = ({
  nonAuth,
  children,
  profileImage,
  profileInitials,
  organisationName,
  organisationIcon,
}: IProps) => {
  const navigation = useNavigate()
  return nonAuth ? (
    <div
      className={
        'fixed flex h-full w-full items-center justify-center bg-gradient-to-r from-primary to-secondary'
      }
    >
      {children}
    </div>
  ) : (
    <div className={'fixed z-50 h-full w-full'}>
      <div className={'z-50 flex h-16 items-center bg-authToolbar '}>
        {organisationName ? (
          <div className="flex items-center p-2 pl-5">
            <Avatar
              fallbackText={organisationName.at(0) ?? ''}
              imageSrc={organisationIcon}
              imageAltText="Organisation Logo"
              className="bg-primary hover:cursor-pointer"
              onClick={() => navigation('/organisationList')}
            />
            <div
              className={` p-2 pl-4  text-xl font-semibold text-white max-md:hidden`}
            >
              {organisationName}
            </div>
          </div>
        ) : (
          <>
            <img
              className="h-10 p-1 pl-6 hover:cursor-pointer max-md:hidden"
              src={AssetNestLogo}
              alt={'assetnest logo'}
              onClick={() => navigation('/organisationList')}
            />
            <img
              className="h-10 p-1 pl-6 hover:cursor-pointer md:hidden"
              src={IconLogo}
              alt={'assetnest logo'}
              onClick={() => navigation('/organisationList')}
            />
          </>
        )}

        <div className=" ml-auto flex items-center p-1 ">
          <div className="flex p-1 pr-9 ">
            <Icon
              color="white"
              className="hover:cursor-pointer hover:underline "
              onClick={() => navigation('/deadLink2')}
              icon="map"
            />
            <div className="px-2 text-white hover:cursor-pointer hover:underline max-md:hidden">
              Map
            </div>
          </div>
          <div className="flex p-1 pr-9">
            <Icon
              color="white"
              className="hover:cursor-pointer hover:underline  "
              onClick={() => navigation('/deadLink2')}
              icon="calendar"
            />
            <div className="px-2 text-white hover:cursor-pointer hover:underline max-md:hidden">
              Calender
            </div>
          </div>
          <div className=" pr-5  ">
            <Avatar
              className={'hover:cursor-pointer'}
              onClick={() => navigation('/profile')}
              fallbackText={profileInitials ?? ''}
              imageSrc={profileImage}
              imageAltText="profile Image"
              imageClassName="bg-zinc-100"
            />
          </div>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-center bg-gray-100">
        {children}
      </div>
    </div>
  )
}
