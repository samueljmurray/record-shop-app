import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import Header from '../Header/Header';
import RecordsListItem from './RecordsListItem';
import RecordListLoadMore from './RecordListLoadMore';
import styles from './RecordsList.styles';

export default (props => (
  <View
    accessibilityRole="main"
    style={styles.root}
  >
    <Header/>
    {!props.records || props.records.length === 0 && <ActivityIndicator/>}
    {!!props.records && props.records.length > 0 && props.records.map(record => (
      <RecordsListItem key={`record-${record.id}`} item={record} />
    ))}
    <RecordListLoadMore
      loadMoreEntries={props.loadMoreEntries}
      moreEntriesExist={props.moreEntriesExist}
    />
  </View>
));