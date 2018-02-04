import React, {Component} from 'react';
import { View } from 'react-native';

import styles from './screen.styles';

export default (WrappedComponent, navigationOptions) => {
  return class Screen extends Component {
    static navigationOptions = navigationOptions;

    render() {
      return (
        <View style={styles.root}>
          <View style={styles.inner}>
            <WrappedComponent {...this.props}/>
          </View>
        </View>
      );
    }
  }
}
