import { gql } from "apollo-boost";

export const CATEGORYS_QUERY = gql`
  {
    categories {
      id
      name
      subCategory {
        id
        name
      }
    }
  }
`;

export const PRODUCTS_QUERY = gql`
  query productsQuery($subCategoryId: ID!) {
    products(where: { subCategory: { id: $subCategoryId } }) {
      id
      name
      snapshot {
        url
      }
    }
  }
`;
