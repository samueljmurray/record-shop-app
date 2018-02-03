import React from 'react';
import { View, Text } from 'react-native';

import styles from './RecordsListItem.styles';

export default (props => (
  <View style={[styles.root, props.item.archivedAt && styles.archived]}>
    <Text style={styles.title}>{props.item.title}</Text>
    <Text style={styles.artistsNames}>{props.item.artists.map(artist => artist.name).join(", ")}</Text>
    <Text style={styles.year}>{props.item.year.toString()}.</Text>
    {props.item.archivedAt && <Text style={styles.year}>Unavailable</Text>}
  </View>
));
