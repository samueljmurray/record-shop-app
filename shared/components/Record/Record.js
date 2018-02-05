import React from 'react';
import { Image, Platform, ScrollView, Text, View } from 'react-native';

import Header from '../Header/Header';
import styles from './Record.styles';

const RootRenderer = Platform.OS === "web" ? View : ScrollView;
const rootRendererProps =
  Platform.OS === "web" ? {
    style: styles.root
  } : {
    contentContainerStyle: styles.root
  };

export default ({ record }) => (
  record ? (
    <RootRenderer {...rootRendererProps }>
      { record.imageBase64 && (
        <Image
          style={styles.image}
          source={{uri: record.imageBase64}}
        />
      )}
      <View style={styles.info}>
        <Text
          accessibilityRole="heading"
          style={styles.title}
        >
          {record.title}
        </Text>
        <Text style={styles.artistsNames}>
          {record.artists.map(artist => artist.name).join(", ")}
        </Text>
        <Text style={styles.year}>
          {record.year.toString()}.
        </Text>
      </View>
    </RootRenderer>
  ) : null
);
