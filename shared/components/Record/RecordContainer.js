import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Record from "./Record";

const QUERY = gql`
  query GetRecord($id: ID!) {
    record(id: $id) {
      id
      title
      year
      archivedAt
      imageBase64
      artists {
        name
      }
    }
  }
`;

export default graphql(QUERY, {
  options(props) {
    return {
      variables: {
        id: props.navigation.state.params.id
      }
    };
  }
})(props => (
  <Record
    loading={props.data.loading}
    record={props.data.record}
  />
));
