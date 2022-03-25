import { gql } from '@apollo/client';

export const QUERY_ME= gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        link
      }
    }
  }
`;

export const QUERY_USERS= gql`
  query users { 
   username
   email
  }
`;

