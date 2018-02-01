import React from 'react';
import { View } from 'react-native';

import Record from '../Record/Record';
import styles from './RecordsList.styles';

export default (props => (
  <View style={styles.root}>
    {
      props.records.map(record => (
        <Record key={`record-${record.id}`} record={record} />
      ))
    }
  </View>
));
