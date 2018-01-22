import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import RecordsList from "./RecordsList";

const QUERY = gql`
  query ListRecords($limit: Int, $offset: Int){
    listRecords(
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
const RECORDS_PER_PAGE = 2;

export default graphql(QUERY, {
  options(props) {
    return {
      variables: {
        limit: RECORDS_PER_PAGE,
        offset: 0
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
            offset: listRecords.length
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
    {props.listRecords && <button className="linkButton" onClick={props.loadMoreEntries}>Load more</button>}
  </div>
));
