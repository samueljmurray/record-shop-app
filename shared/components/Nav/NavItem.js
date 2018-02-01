import React from 'react';
import { Text } from 'react-native';

import styles from './NavItem.styles';

export default (props) => (
  <Text style={styles.root}>{"\u2022"} {props.itemText}</Text>
);