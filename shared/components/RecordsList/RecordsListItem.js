import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './RecordsListItem.styles';
import RouteTo from '../RouteTo/RouteTo';

export default ({ item, navigation }) => (
  <RouteTo
    navigation={navigation}
    options={{
      id: item.id,
      title: item.title
    }}
    pathname={`/records/${item.id}`}
    route='Record'
  >
    <View style={[styles.root, item.archivedAt && styles.archived]}>
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
    </View>
  </RouteTo>
);
