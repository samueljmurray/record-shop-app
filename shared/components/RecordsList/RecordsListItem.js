import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './RecordsListItem.styles';

export default ({ item, navigation }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('Record', {
        id: item.id,
        title: item.title
      });
    }}
    style={[styles.root, item.archivedAt && styles.archived]}
  >
    <Text style={styles.title}>
      {item.title}
    </Text>
    <Text style={styles.artistsNames}>
      {item.artists.map(artist => artist.name).join(", ")}
    </Text>
    <Text style={styles.year}>
      {item.year.toString()}.
    </Text>
    {item.archivedAt && (
      <Text style={styles.year}>Unavailable</Text>
    )}
  </TouchableOpacity>
);
