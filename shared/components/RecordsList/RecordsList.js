import React from 'react';
import { FlatList, View } from 'react-native';

import Header from '../Header/Header';
import Record from '../Record/Record';
import RecordListLoadMore from './RecordListLoadMore';
import styles from './RecordsList.styles';

export default (props => (
  <View style={styles.root}>
    <FlatList
      data={props.records}
      renderItem={Record}
      keyExtractor={(item, index) => `record-${item.id}-${index}`}
      ListHeaderComponent={Header}
      ListFooterComponent={() => (
        props.records && props.records.length < props.recordsCount && <RecordListLoadMore loadMoreEntries={props.loadMoreEntries}/>
      )}
    />
  </View>
));
