import React from 'react';
import { View } from 'react-native';

import NavItem from './NavItem';
import styles from './Nav.styles';

export default () => (
  <View style={styles.root}>
    <NavItem itemText="Item 1"/>
    <NavItem itemText="Item 2"/>
    <NavItem itemText="Item 3"/>
  </View>
);