import { ReactNode, useMemo } from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PaginationComponent from "./Pagination";

interface TableComponentProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  globalFilter?: string;
  children?: (original: TData) => ReactNode;
}

const TableComponent = <TData,>({
  data,
  columns,
  globalFilter,
  children,
}: TableComponentProps<TData>) => {
  const tableColumns = useMemo<ColumnDef<TData>[]>(() => [
    ...columns,
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        // استخدام row.id كقيمة فريدة لمفتاح
        <div key={`actions-${row.id}`} className="flex items-center justify-center text-center container">
          {children && children(row.original)}
        </div>
      ),
    },
  ], [columns, children]);
  
  const table = useReactTable({
    data: data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: { pagination: { pageSize: 5 } },
    state: { globalFilter },
  });

  return (
    <div className="rounded-md border">
      <Table className="text-center">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="text-center">
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="text-center">
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow className="text-center">
              <TableCell colSpan={columns.length + 1} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <PaginationComponent table={table} />
    </div>
  );
};

export default TableComponent;
