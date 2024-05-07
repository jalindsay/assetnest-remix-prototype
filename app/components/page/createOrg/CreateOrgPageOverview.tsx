import { Avatar } from '~/components/ui/Avatar'
import Button from '~/components/ui/Button'
import { Icon } from '~/components/ui/Icon'
import { TextArea } from '~/components/ui/TextArea'
import { importantText, subPageTitle } from '~/styles/typography'

interface IProps {
  name: string
  description: string
  goPage(page: number): void
  imagePathLocal: string
  emails: string[]
}

export const CreateOrgPageOverview = ({
  name,
  description,
  goPage,
  imagePathLocal,
  emails,
}: IProps) => {
  return (
    <>
      <div className={`${subPageTitle}`}>Preview</div>
      <div className="flex items-center py-5">
        <Avatar
          className="h-14 w-14"
          imageSrc={imagePathLocal}
          fallbackText={name[0]}
        />
        <div className="flex flex-col pl-4">
          <div className={`${importantText}`}>{name}</div>
        </div>
      </div>
      <div className="relative mt-8 h-24 w-full">
        <TextArea
          name={'demoDescription'}
          disabled
          onChange={() => {}}
          label={'Description'}
          value={description}
          noPadding
          className="absolute "
        />
        <div className="flex w-full flex-row-reverse">
          <Button
            className="absolute  mt-[-1.2rem] h-8 w-8 "
            variant="outline"
            noPadding
            onClick={() => {
              goPage(0)
            }}
          >
            <Icon className=" h-4 w-4" icon="edit" />
          </Button>
        </div>
      </div>
      <div className="relative mt-8 h-24 w-full">
        <TextArea
          name={'demoDescription'}
          disabled
          onChange={() => {}}
          label={'Invited Team Members'}
          value={emails.join(',')}
          noPadding
          className="absolute "
        />
        <div className="flex w-full flex-row-reverse">
          <Button
            className="absolute mt-[-1.2rem] h-8 w-8"
            variant="outline"
            noPadding
            onClick={() => {
              goPage(2)
            }}
          >
            <Icon className=" h-4 w-4" icon="edit" />
          </Button>
        </div>
      </div>
    </>
  )
}
