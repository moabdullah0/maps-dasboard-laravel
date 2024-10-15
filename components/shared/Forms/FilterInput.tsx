import { Input } from "@/components/ui/input";

interface FilterInputProps {
  globalFilter: string | undefined;
  setGlobalFilter: (value: string) => void;
}

const FilterInput = ({ globalFilter, setGlobalFilter }: FilterInputProps) => {
  return (
    <div className="flex items-center w-1/3 py-1 focus:border-spacing-6">
      <Input
        placeholder="بحث..."
        value={globalFilter ?? ""}
        onChange={(event) => setGlobalFilter(event.target.value)}
        className="rounded-full border border-blue-200 focus:border focus:border-blue-500"
      />
    </div>
  );
};

export default FilterInput;
