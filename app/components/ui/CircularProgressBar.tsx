interface IProps {
  percent: number
  className?: string
}

export const CircularProgressBar = ({ percent }: IProps) => {
  return (
    <div
      className=" h-10 w-10"
      style={{
        borderRadius: '50%',
        background:
          'radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#327B93 ' +
          percent +
          '%, #DBEDF3 0)',
      }}
      role="progressbar"
      aria-valuenow={75}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="flex h-full w-full items-center justify-center text-xs text-primary">
        {percent}%
      </div>
    </div>
  )
}
