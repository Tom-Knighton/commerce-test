import { graphql } from "../graphql";
import { CartDigitalItemFragment } from "./CartDigitalItemFragment";
import { CartPhysicalItemFragment } from "./CartPhysicalItemFragment";
import { MoneyFieldsFragment } from "./MoneyFieldsFragment";

const CartFieldsFragment = graphql(
  `
    fragment CartFields on Cart {
      entityId
      amount {
        ...MoneyFields
      }
      createdAt {
        utc
      }
      currencyCode
      locale
      lineItems {
        totalQuantity
        customItems {
          quantity
          entityId
          extendedListPrice {
            ...MoneyFields
          }
          listPrice {
            ...MoneyFields
          }
          name
          sku
        }
        totalQuantity
        physicalItems {
          ...PhysicalItemFields
        }
        digitalItems {
          ...DigitalItemFields
        }
      }
    }
  `,
  [MoneyFieldsFragment, CartPhysicalItemFragment, CartDigitalItemFragment]
);

export { CartFieldsFragment };
