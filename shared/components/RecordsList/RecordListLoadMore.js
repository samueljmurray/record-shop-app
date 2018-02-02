import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './RecordListLoadMore.styles';

export default (props) => (
  <TouchableOpacity onPress={props.loadMoreEntries}>
    <Text style={styles.loadMore}>
      Load more
    </Text>
  </TouchableOpacity>
);