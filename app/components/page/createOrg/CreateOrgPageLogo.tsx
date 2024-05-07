import Button from '~/components/ui/Button'
import { subPageTitle, textRegular } from '~/styles/typography'

interface IProps {
  updateOrgIconImage: (e: React.ChangeEvent<HTMLInputElement> | '') => void
  iconPathLocal: string
}

export const CreateOrgPageLogo = ({
  updateOrgIconImage,
  iconPathLocal: imageIconPathLocal,
}: IProps) => {
  return (
    <div className="w-full">
      <h2 className={`${subPageTitle}`}>Icon</h2>
      <div>
        Adding an icon will help to identify your organisation. This is
        especially useful if you have more than one.
      </div>
      <div className={`${textRegular} py-4`}>
        Some tips on choosing your icon:
        <ul className=" list-disc pl-6">
          <li>Use a graphical logo or image rather than text.</li>
          <li>Upload an image that is 320 px square or larger.</li>
          <li>
            Use the tools to resize and crop your logo to fit.(Feature to be
            added in future)
          </li>
        </ul>
      </div>
      <div className=" py-2 text-sm font-bold">Upload an icon</div>
      <div className=" py-4 text-xs">File types: jpeg, png</div>
      <div className="relative pb-4 hover:cursor-pointer hover:underline">
        <input
          type="file"
          name="icon"
          accept="image/png, image/jpeg"
          onChange={updateOrgIconImage}
          className="absolute  opacity-0"
        />
        <div className="text-primary">Choose file</div>
      </div>
      {imageIconPathLocal && (
        <>
          <img className="h-52 w-52 object-cover " src={imageIconPathLocal}  alt={''} />
          <div className="p-1 py-2">
            <Button variant="outline" onClick={() => updateOrgIconImage('')}>
              Remove Icon
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
