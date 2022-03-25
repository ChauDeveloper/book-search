import { gql } from '@apollo/client';

export const QUERY_MEcd= gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;