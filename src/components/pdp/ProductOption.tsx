import { IProductOption } from "@/lib/models";
import { Button } from "../ui/button";

interface IProductOptionSelectProps {
  option: IProductOption;
  selectedId?: string;
  setSelected: (_id: string) => void;
}

const ProductOptionSelect = ({
  option,
  selectedId,
  setSelected,
}: IProductOptionSelectProps) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium">{option.name}</label>
      </div>
      <div className="grid grid-cols-5 gap-2 mt-2">
        {option.values.map((v) => (
          <Button
            key={v.id}
            variant={selectedId === v.id ? "default" : "outline"}
            onClick={() => setSelected(v.id)}
          >
            {v.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductOptionSelect;
