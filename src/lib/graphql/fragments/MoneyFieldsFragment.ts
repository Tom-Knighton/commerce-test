import { graphql } from "../graphql";

const MoneyFieldsFragment = graphql(`
  fragment MoneyFields on Money {
    value
    currencyCode
  }
`);

export { MoneyFieldsFragment };
