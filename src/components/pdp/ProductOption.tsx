import { ProductOptionsFragment } from "@/lib/graphql/fragments";
import { ResultOf } from "gql.tada";
import { Button } from "../ui/button";

interface IProductOptionSelectProps {
  option: ResultOf<typeof ProductOptionsFragment>["node"];
  selectedId?: number;
  setSelected: (_id: number) => void;
}

const ProductOptionSelect = ({
  option,
  selectedId,
  setSelected,
}: IProductOptionSelectProps) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium">{option.displayName}</label>
      </div>
      <div className="grid grid-cols-5 gap-2 mt-2">
        {option.__typename === "MultipleChoiceOption" && (
          <>
            {option.values.edges?.map((edge) => (
              <Button
                key={edge.node.entityId}
                variant={
                  selectedId === edge.node.entityId
                    ? "default"
                    : "outline"
                }
                onClick={() => setSelected(edge.node.entityId)}
              >
                {edge.node.label}
              </Button>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductOptionSelect;
