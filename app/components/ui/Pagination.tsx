interface IProps {
  totalNumberPages: number
  selectedPage: number
  goPage: (page: number) => void
  onPrevClick: () => void
  onNextClick: () => void
}
// 0 counts as a page
export const Pagination = ({
  totalNumberPages,
  selectedPage,
  onPrevClick,
  onNextClick,
  goPage,
}: IProps) => {
  const pages = []

  for (let i = 0; i < totalNumberPages + 1; i++) {
    pages.push(
      <li key={i}>
        <div
          onClick={() => goPage(i)}
          className={
            i === selectedPage
              ? //selected icon
                'z-10 flex h-10 items-center justify-center border border-blue-300 bg-blue-50 px-4 leading-tight text-blue-600 hover:cursor-pointer hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
              : //unselected icon
                'flex h-10 items-center justify-center border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          }
        >
          {i + 1}
        </div>
      </li>,
    )
  }

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="flex h-10 items-center -space-x-px text-base">
          <li>
            <button
              onClick={onPrevClick}
              className="ml-0 flex h-10 items-center justify-center rounded-l-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              disabled={selectedPage === 0}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
          </li>
          {pages}
          <li>
            <button
              onClick={onNextClick}
              className="flex h-10 items-center justify-center rounded-r-lg border border-gray-300 bg-white px-4 leading-tight text-gray-500 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              disabled={selectedPage === totalNumberPages}
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
