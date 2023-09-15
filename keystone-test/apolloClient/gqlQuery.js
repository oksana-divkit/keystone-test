import { gql } from "@apollo/client";

export const getUsers = gql`
  query {
    users {
      email
      name
      productsCount
    }
  }
`;
