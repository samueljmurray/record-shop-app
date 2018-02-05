import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './RecordListLoadMore.styles';

export default (props) => (
  props.moreEntriesExist ? (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={props.loadMoreEntries}
    >
      <Text style={styles.loadMore}>
        Load more
      </Text>
    </TouchableOpacity>
  ) : null
);