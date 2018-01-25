import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import RecordsList from "./RecordsList";
import './RecordsListContainer.css';

const QUERY = gql`
  query GetRecords($limit: Int, $offset: Int) {
    records(
      limit: $limit,
      offset: $offset
    ) {
      id
      title
      year
      archivedAt
      artists {
        name
      }
    }
  }
`;
const RECORDS_PER_PAGE = 10;

export default graphql(QUERY, {
  options(props) {
    return {
      variables: {
        limit: RECORDS_PER_PAGE,
        offset: 0
      }
    };
  }
})(props => (
  <div className="RecordsListContainer">
    {props.data.loading && <p>LOADING!</p>}
    {props.data.records && (
      <RecordsList records={props.data.records} />
    )}
  </div>
));
