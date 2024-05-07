import * as React from 'react'

import { cn } from '~/components/ui/shadUi/utils'

const TableShad = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto">
    <table
      ref={ref}
      className={cn('w-full caption-bottom  text-sm tabular-nums', className)}
      {...props}
    />
  </div>
))
TableShad.displayName = 'Table'

const TableHeaderShad = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn('text-left [&_tr]:border-b-4', className)}
    {...props}
  />
))
TableHeaderShad.displayName = 'TableHeaderShad'

const TableBodyShad = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
))
TableBodyShad.displayName = 'TableBodyShad'

const TableFooterShad = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn('bg-primary font-medium text-primary-foreground', className)}
    {...props}
  />
))
TableFooterShad.displayName = 'TableFooterShad'

const TableRowShad = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-b-4 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      className,
    )}
    {...props}
  />
))
TableRowShad.displayName = 'TableRowShad'

const TableHeadShad = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      className,
    )}
    {...props}
  />
))
TableHeadShad.displayName = 'TableHead'

const TableCellShad = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'overflow-hidden text-ellipsis whitespace-nowrap p-4 text-left align-middle [&:has([role=checkbox])]:pr-0',
      className,
    )}
    {...props}
  />
))
TableCellShad.displayName = 'TableCellShad'

const TableCaptionShad = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-muted-foreground', className)}
    {...props}
  />
))
TableCaptionShad.displayName = 'TableCaptionShad'

export {
  TableShad,
  TableHeaderShad,
  TableBodyShad,
  TableFooterShad,
  TableHeadShad,
  TableRowShad,
  TableCellShad,
  TableCaptionShad,
}
