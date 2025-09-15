import Button from "@/components/ui/button/Button";

type Props = {
  onClear: () => void;
};

const ProductInventoryFilterActionUI = ({ onClear }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <Button type="submit" variant="primary">
        Search
      </Button>
      <Button type="button" variant="outline" onClick={onClear}>
        Clear
      </Button>
    </div>
  );
};

export default ProductInventoryFilterActionUI;
