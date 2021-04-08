import { gql } from '@apollo/client';

export const CHARACTERS = gql`
  query GET_CHARACTERS {
    characters(page: 1) {
      results {
        name
        id
        image
        species
        gender
        location {
          name
        }
      }
    }
  }
`;

export const CHARACTER = gql`
  query GET_CHARACTER {
    character(id: 1) {
      name
      created
    }
  }
`;
