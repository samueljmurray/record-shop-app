import React from 'react';
import { TouchableOpacity } from 'react-native';

export default ({ children, options, navigation, route }) => (
  <TouchableOpacity onPress={() => navigation.navigate(route, options)}>
    {children}
  </TouchableOpacity>
);
