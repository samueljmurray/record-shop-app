import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import RecordsList from "./RecordsList";

const QUERY = gql`
  query ListRecords($first: Int, $page: Int){
    listRecords(
      first: $first,
      page: $page
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
const RECORDS_PER_PAGE = 2;

export default graphql(QUERY, {
  options(props) {
    return {
      variables: {
        first: RECORDS_PER_PAGE,
        page: 1
      }
    };
  },
  props({ data: { loading, listRecords, fetchMore } }) {
    return {
      loading,
      listRecords,
      loadMoreEntries() {
        return fetchMore({
          variables: {
            page: Math.ceil(listRecords.length/RECORDS_PER_PAGE) + 1
          },
          updateQuery(previousResult, {fetchMoreResult}) {
            if (!fetchMoreResult) return previousResult;
            return Object.assign({}, previousResult, {
              listRecords: [...previousResult.listRecords, ...fetchMoreResult.listRecords]
            });
          }
        });
      }
    };
  }
})(props => (
  <div>
    {props.loading && <p>LOADING!</p>}
    {props.listRecords && (
      <RecordsList records={props.listRecords} />
    )}
    <button className="linkButton" onClick={props.loadMoreEntries}>Load more</button>
  </div>
));
