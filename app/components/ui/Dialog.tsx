interface IProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Dialog = ({ children, onClose, open }: IProps) => {
  return open ? (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto" onClick={onClose}>
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div
              className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
              onClick={(event) => {
                event.stopPropagation()
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}
