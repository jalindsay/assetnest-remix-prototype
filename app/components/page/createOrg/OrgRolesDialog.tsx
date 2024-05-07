import { Accordion } from '~/components/ui/Accordion'
import { Dialog } from '~/components/ui/Dialog'
import { secondaryText, tableHeader } from '~/styles/typography'

interface IProps {
  openDialog: boolean
  setOpenDialog(value: boolean): void
}

export const OrgRolesDialog = ({ openDialog, setOpenDialog }: IProps) => {
  return (
    <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
      <h3 className={`${tableHeader}`}>Roles</h3>
      <div className={`${secondaryText}`}>
        Roles help set up permissions in a consistent way, which helps keep your
        workspace secure and compliant. Each role has read-only access to
        features not listed below.
      </div>
      <Accordion
        rows={[
          {
            trigger: <div>Organisation Owner</div>,
            content: (
              <ul className="list-disc pl-5">
                <li>Full access to organisation</li>
              </ul>
            ),
          },
          {
            trigger: <div>Organisation Admin</div>,
            content: (
              <ul className="list-disc	pl-5">
                <li>
                  Ability to update the organisation details (icon and name).
                </li>
                <li>Ability to manage user’s status and roles.</li>
              </ul>
            ),
          },
          {
            trigger: <div>Asset Manager</div>,
            content: (
              <ul className="list-disc	pl-5">
                <li>Access to assets.</li>
                <li>Ability to manage assets (create, update and delete).</li>
              </ul>
            ),
          },
          {
            trigger: <div>Inspection Admin</div>,
            content: (
              <ul className="list-disc	pl-5">
                <li>Access to inspections.</li>
                <li>
                  Ability to manage inspections (create, edit templates and
                  delete templates).{' '}
                </li>
              </ul>
            ),
          },
          {
            trigger: <div>Inspector</div>,
            content: (
              <ul className="list-disc	pl-5">
                <li>Access to inspections.</li>
                <li>Ability to carry out inspections.</li>
              </ul>
            ),
          },
          {
            trigger: <div>Defect Admin</div>,
            content: (
              <ul className="list-disc	pl-5">
                <li>Access to defects.</li>
                <li>Ability to configure, raise, and review defects.</li>
              </ul>
            ),
          },
          {
            trigger: <div>Maintenance Manager</div>,
            content: (
              <ul className="list-disc	pl-5">
                <li>Access to maintenance.</li>
                <li>Ability to allocate maintenance tasks.</li>
              </ul>
            ),
          },
          {
            trigger: <div>Maintenance Engineer</div>,
            content: (
              <ul className="list-disc	pl-5">
                <li>Access to maintenance.</li>
                <li>Ability to carry out maintenance.</li>
                <li>Ability to close out defects.</li>
              </ul>
            ),
          },
        ]}
      />
    </Dialog>
  )
}
