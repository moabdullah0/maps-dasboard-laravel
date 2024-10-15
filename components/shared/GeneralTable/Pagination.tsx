import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";

interface PaginationComponentProps<TData> {
  table: Table<TData>; 
}

const PaginationComponent = <TData,>({ table }: PaginationComponentProps<TData>) => {
  return (
    <div className="flex items-center justify-end space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        السابق
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        التالي
      </Button>
    </div>
  );
};

export default PaginationComponent;
