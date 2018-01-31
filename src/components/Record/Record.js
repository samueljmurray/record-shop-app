import React from 'react';
import { View, Text } from 'react-native';

import styles from './Record.styles';

export default (props => (
  <View style={[styles.root, props.record.archivedAt && styles.archived]}>
    <Text style={styles.title}>{props.record.title}</Text>
    <Text style={styles.artistsNames}>{props.record.artists.map(artist => artist.name).join(", ")}</Text>
    <Text style={styles.year}>{props.record.year.toString()}.</Text>
    {props.record.archivedAt && <Text style={styles.year}>Unavailable</Text>}
  </View>
));
