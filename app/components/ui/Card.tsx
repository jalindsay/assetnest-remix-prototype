interface IProps {
  children: React.ReactNode
  innerClassName?: string
  outerClassName?: string
}

export const Card = ({ children, innerClassName, outerClassName }: IProps) => (
  <div
    className={
      outerClassName ? '' : `max-h-[calc(100vh-100px)] overflow-auto py-1 `
    }
  >
    <div
      className={`shadow-[0 2px 8px rgba(0, 0, 0, 0.2)] flex-column flex justify-center rounded bg-white`}
    >
      <div className={`${innerClassName ? innerClassName : 'p-8'}  `}>
        {children}
      </div>
    </div>
  </div>
)
