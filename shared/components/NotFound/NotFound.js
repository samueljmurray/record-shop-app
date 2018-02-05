import React from 'react';
import { Text, View } from 'react-native';

import styles from './NotFound.styles';

export default () => (
  <View style={styles.root}>
    <Text
      accessibilityRole="heading"
      style={styles.message}
    >
      Not found
    </Text>
  </View>
);
