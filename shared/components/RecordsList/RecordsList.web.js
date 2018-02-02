import React from 'react';
import { View } from 'react-native';

import Header from '../Header/Header';
import Record from '../Record/Record';
import RecordListLoadMore from './RecordListLoadMore';
import styles from './RecordsList.styles';

export default (props => (
  <View style={styles.root}>
    <Header/>
    {
      props.records.map(record => (
        <Record key={`record-${record.id}`} item={record} />
      ))
    }
    <RecordListLoadMore loadMoreEntries={props.loadMoreEntries}/>
  </View>
));