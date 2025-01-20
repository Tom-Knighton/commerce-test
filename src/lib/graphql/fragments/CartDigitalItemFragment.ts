import { graphql } from "../graphql";
import { MoneyFieldsFragment } from "./MoneyFieldsFragment";

const CartDigitalItemFragment = graphql(
  `
    fragment DigitalItemFields on CartDigitalItem {
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
      entityId
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
      }
    }
  `,
  [MoneyFieldsFragment]
);

export { CartDigitalItemFragment };
