import {
  TableBodyShad,
  TableCellShad,
  TableHeadShad,
  TableHeaderShad,
  TableRowShad,
  TableShad,
} from '~/components/ui/shadUi/ui/table'

export interface cellType {
  align?: 'left' | 'right'
  content: React.ReactNode
}

export interface rowType {
  onClick?: () => void
  content: cellType[]
}
//GENERAL RULES FOR TABLES
/*
- Dates/ any numbers should be right-aligned
- Truncate text don’t stack
- make sure text is one line and truncates with ellipsis
*/

interface IProps {
  headers: React.ReactNode[]
  rows: rowType[]
}

export const Table = ({ headers, rows }: IProps) => (
  <TableShad>
    <TableHeaderShad>
      <TableRowShad>
        {headers.map((header, index) => (
          <TableHeadShad key={index}>{header}</TableHeadShad>
        ))}
      </TableRowShad>
    </TableHeaderShad>
    <TableBodyShad>
      {rows.map((row, index) => (
        <TableRowShad
          onClick={row.onClick}
          className={`${row.onClick && 'cursor-pointer'}`}
          key={index}
        >
          {row.content.map((cell, index) => {
            return (
              <TableCellShad
                key={index}
                className={`text-left ${
                  cell.align === 'right' && 'text-right'
                }`}
              >
                {cell.content}
              </TableCellShad>
            )
          })}
        </TableRowShad>
      ))}
    </TableBodyShad>
  </TableShad>
)
