import { graphql } from "../graphql";
import { MoneyFieldsFragment } from "./MoneyFieldsFragment";

const CartPhysicalItemFragment = graphql(
  `
    fragment PhysicalItemFields on CartPhysicalItem {
      brand
      quantity
      entityId
      variantEntityId
      extendedListPrice {
        ...MoneyFields
      }
      listPrice {
        ...MoneyFields
      }
      name
      sku
      productEntityId
      couponAmount {
        ...MoneyFields
      }
      image {
        url320wide: url(width: 320)
        url640wide: url(width: 640)
        url960wide: url(width: 960)
        url1280wide: url(width: 1280)
      }
      selectedOptions {
        entityId
        name
        ... on CartSelectedMultipleChoiceOption {
          name
          value
          entityId
          valueEntityId
        }
      }
    }
  `,
  [MoneyFieldsFragment]
);

export { CartPhysicalItemFragment };
