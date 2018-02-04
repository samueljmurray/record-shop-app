import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';

import Header from '../Header/Header';
import RecordsListItem from './RecordsListItem';
import RecordListLoadMore from './RecordListLoadMore';
import styles from './RecordsList.styles';

export default (props => (
  <FlatList
    data={props.records}
    renderItem={({ item }) => (
      <RecordsListItem
        item={item}
        navigation={props.navigation}
      />
    )}
    keyExtractor={(item, index) => `record-${item.id}-${index}`}
    onRefresh={props.reloadEntries}
    refreshing={props.loading}
    style={styles.root}
    ListHeaderComponent={Header}
    ListFooterComponent={() => (
      <RecordListLoadMore
        loadMoreEntries={props.loadMoreEntries}
        moreEntriesExist={props.moreEntriesExist}
      />
    )}
  />
));
