import React from 'react';
import { Platform, View, ScrollView, FlatList } from 'react-native';

import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import RecordsListContainer from "../RecordsList/RecordsListContainer";
import styles from './Layout.styles';

const RootElement = Platform.OS === "web" ? View : ScrollView;

export default () => (
  <RootElement style={styles.root}>
    <View style={styles.body}>
      <View style={styles.listing}>
        <RecordsListContainer/>
      </View>
      {/* <View style={styles.nav}>
        <Nav/>
      </View> */}
    </View>
  </RootElement>
);
