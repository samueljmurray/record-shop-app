import React from 'react';
import { View } from 'react-native';

import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import RecordsListContainer from "../RecordsList/RecordsListContainer";
import styles from './Layout.styles';

export default () => (
  <View style={styles.root}>
    <Header/>
    <View style={styles.body}>
      <View style={styles.nav}>
        <Nav/>
      </View>
      <View style={styles.listing}>
        <RecordsListContainer/>
      </View>
    </View>
  </View>
);
