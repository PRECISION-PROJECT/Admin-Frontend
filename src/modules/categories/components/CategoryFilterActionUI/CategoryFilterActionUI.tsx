import Button from "@/components/ui/button/Button";

type Props = {
  onClear: () => void;
};

const CategoryFilterActionUI = ({ onClear }: Props) => {
  return (
    <div className="flex items-end gap-2">
      <Button type="submit" variant="primary">
        Search
      </Button>
      <Button type="button" variant="outline" onClick={onClear}>
        Clear
      </Button>
    </div>
  );
};

export default CategoryFilterActionUI;
