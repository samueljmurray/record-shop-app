import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import Header from '../Header/Header';
import RecordsListItem from './RecordsListItem';
import RecordListLoadMore from './RecordListLoadMore';

export default (props => (
  <View>
    <Header/>
    {props.records.length === 0 && <ActivityIndicator/>}
    {props.records.length > 0 && props.records.map(record => (
      <RecordsListItem key={`record-${record.id}`} item={record} />
    ))}
    <RecordListLoadMore
      loadMoreEntries={props.loadMoreEntries}
      moreEntriesExist={props.moreEntriesExist}
    />
  </View>
));