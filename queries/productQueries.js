import { gql } from "apollo-boost";

export const PRODUCT_QUERY = gql`
  query productQuery($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      mainImg {
        id
        url
      }
      nameKr
      nameEn
      madeIn
      modelName
      infoImg(orderBy: fileName_ASC) {
        id
        url
      }
      infoText
      infomation
    }
  }
`;
