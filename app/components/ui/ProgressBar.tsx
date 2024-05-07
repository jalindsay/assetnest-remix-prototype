import { ProgressShad } from '~/components/ui/shadUi/ui/progress'

interface IProps {
  progress: number
}

export const ProgressBar = ({ progress }: IProps) => {
  return <ProgressShad value={progress} />
}
