import {
  Plus,
  NavArrowLeft,
  NavArrowRight,
  NavArrowDown,
  NavArrowUp,
  StatsUpSquare,
  EyeOff,
  EyeEmpty,
  CheckCircle,
  Cancel,
  WarningTriangle,
  EditPencil,
  LogOut,
  MoreVert,
  FilterList,
  Mail,
  Community,
  Pause,
  Trash,
  HelpCircle,
  Trophy,
  PasteClipboard,
  Wrench,
  Calendar,
  Map,
  Copy,
  ShareIos,
  ShareAndroid,
  AddFolder,
  Folder,
  Clock,
  Download,
  AddMediaImage,
} from 'iconoir-react'

export type iconsTypes =
  | 'add'
  | 'leftArrow'
  | 'rightArrow'
  | 'downArrow'
  | 'upArrow'
  | 'chart'
  | 'show'
  | 'hide'
  | 'success'
  | 'close'
  | 'warning'
  | 'edit'
  | 'exitDoor'
  | 'threeDotsVertical'
  | 'filter'
  | 'email'
  | 'group'
  | 'pause'
  | 'bin'
  | 'addWhite'
  | 'help'
  | 'trophy'
  | 'pasteClipboard'
  | 'wrench'
  | 'calendar'
  | 'map'
  | 'copy'
  | 'share'
  | 'share3Dots'
  | 'addFolder'
  | 'Folder'
  | 'clock'
  | 'download'
  | 'addMediaImage'

interface IProps {
  icon: iconsTypes
  className?: string
  onClick?: () => void
  color?: string
}

//Make sure to use noirIcon Icons instead of importing svgs when adding icons
//
const getIconInfo = (
  icon: iconsTypes,
  color?: string,
  onClick?: () => void,
) => {
  switch (icon) {
    case 'add':
      return <Plus color={color} onClick={onClick} />
    case 'leftArrow':
      return <NavArrowLeft color={color} onClick={onClick} />
    case 'rightArrow':
      return <NavArrowRight color={color} onClick={onClick} />
    case 'downArrow':
      return <NavArrowDown color={color} onClick={onClick} />
    case 'upArrow':
      return <NavArrowUp color={color} onClick={onClick} />
    case 'chart':
      return <StatsUpSquare color={color} onClick={onClick} />
    case 'hide':
      return <EyeOff color={color} onClick={onClick} />
    case 'show':
      return <EyeEmpty color={color} onClick={onClick} />
    case 'success':
      return <CheckCircle color={color ? '#38DDB4' : color} onClick={onClick} />
    case 'close':
      return <Cancel color={color} onClick={onClick} />
    case 'warning':
      return <WarningTriangle color={color} onClick={onClick} />
    case 'edit':
      return <EditPencil color={color} onClick={onClick} />
    case 'exitDoor':
      return <LogOut color={color} onClick={onClick} />
    case 'threeDotsVertical':
      return <MoreVert color={color} onClick={onClick} />
    case 'filter':
      return <FilterList color={color} onClick={onClick} />
    case 'email':
      return <Mail color={color} onClick={onClick} />
    case 'group':
      return <Community color={color} onClick={onClick} />
    case 'pause':
      return <Pause color={color} onClick={onClick} />
    case 'bin':
      return <Trash color={color} onClick={onClick} />
    case 'help':
      return <HelpCircle color={color} onClick={onClick} />
    case 'trophy':
      return <Trophy color={color} onClick={onClick} />
    case 'pasteClipboard':
      return <PasteClipboard color={color} onClick={onClick} />
    case 'wrench':
      return <Wrench color={color} onClick={onClick} />
    case 'calendar':
      return <Calendar color={color} onClick={onClick} />
    case 'map':
      return <Map color={color} onClick={onClick} />
    case 'copy':
      return <Copy color={color} onClick={onClick} />
    case 'share':
      return <ShareIos color={color} onClick={onClick} />
    case 'share3Dots':
      return <ShareAndroid color={color} onClick={onClick} />
    case 'addFolder':
      return <AddFolder color={color} onClick={onClick} />
    case 'Folder':
      return <Folder color={color} onClick={onClick} />
    case 'clock':
      return <Clock color={color} onClick={onClick} />
    case 'download':
      return <Download color={color} onClick={onClick} />
    case 'addMediaImage':
      return <AddMediaImage color={color} onClick={onClick} />
  }
}

export const Icon = ({ icon, className, onClick, color }: IProps) => {
  return <div className={className}>{getIconInfo(icon, color, onClick)}</div>
}
