import React from 'react';
import { View, Text } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import RecordsList from "./RecordsList";
import styles from './RecordsListContainer.styles';

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
  props({ data: { loading, records, recordsCount, fetchMore } }) {
    return {
      loading,
      records,
      recordsCount,
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
      }
    };
  }
})(props => (
  <View style={styles.root}>
    {props.loading && <Text style={styles.loading}>LOADING!</Text>}
    {props.records && (
      <RecordsList
        records={props.records}
        recordsCount={props.recordsCount}
        loadMoreEntries={props.loadMoreEntries}
      />
    )}
  </View>
));
