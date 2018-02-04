import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import RecordsList from "./RecordsList";

const QUERY = gql`
  query GetPageOfRecords($limit: Int, $offset: Int) {
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
    recordsCount
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
  },
  props({
    data: { loading, records, recordsCount, fetchMore },
    ownProps: { navigation }
  }) {
    return {
      loading,
      records,
      recordsCount,
      navigation,
      loadMoreEntries() {
        return fetchMore({
          variables: {
            offset: records.length
          },
          updateQuery(previousResult, {fetchMoreResult}) {
            if (!fetchMoreResult) return previousResult;
            return Object.assign({}, previousResult, {
              records: [...previousResult.records, ...fetchMoreResult.records]
            });
          }
        });
      },
      reloadEntries() {
        return fetchMore({
          variables: {
            offset: 0
          },
          updateQuery(previousResult, {fetchMoreResult}) {
            return Object.assign({}, previousResult, {
              records: fetchMoreResult.records
            });
          }
        });
      }
    };
  }
})(props => (
  <RecordsList
    loading={props.loading}
    loadMoreEntries={props.loadMoreEntries}
    moreEntriesExist={props.records && props.records.length < props.recordsCount}
    navigation={props.navigation}
    records={props.records}
    reloadEntries={props.reloadEntries}
  />
));
