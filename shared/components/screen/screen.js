import React, {Component} from 'react';
import { Platform, View } from 'react-native';

import styles from './screen.styles';

export default (WrappedComponent, navigationOptions) => {
  return class Screen extends Component {
    static navigationOptions = navigationOptions;

    render() {
      const routeParams = Platform.OS === "web"
        ? this.props.match.params
        : this.props.navigation.state.params;

      return (
        <View style={styles.root}>
          <View style={styles.inner}>
            <WrappedComponent
              { ...this.props }
              routeParams={routeParams}
            />
          </View>
        </View>
      );
    }
  }
}
