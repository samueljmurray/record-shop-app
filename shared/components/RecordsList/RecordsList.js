import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import Header from '../Header/Header';
import RecordsListItem from './RecordsListItem';
import RecordListLoadMore from './RecordListLoadMore';
import styles from './RecordsList.styles';

export default (props => (
  <View style={styles.root}>
    <FlatList
      data={props.records}
      renderItem={RecordsListItem}
      keyExtractor={(item, index) => `record-${item.id}-${index}`}
      ListHeaderComponent={Header}
      ListFooterComponent={() => (
        <RecordListLoadMore
          loadMoreEntries={props.loadMoreEntries}
          moreEntriesExist={props.moreEntriesExist}
        />
      )}
      ListEmptyComponent={ActivityIndicator}
    />
  </View>
));
