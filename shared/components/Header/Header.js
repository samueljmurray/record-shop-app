import React, { Component } from 'react';
import { Animated, Easing, View, Image, Platform, Text } from 'react-native';

import styles from "./Header.styles";
import logo from '../../img/vinyl.png';

class Header extends Component {
  state = {
    logoAnimation: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.loop(
      Animated.timing(
        this.state.logoAnimation,
        {
          fromValue: 0,
          toValue: 1,
          duration: 5000,
          easing: Easing.linear
        }
      )
    ).start();
  }

  render() {
    const spin = this.state.logoAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={styles.root}>
        <Animated.Image source={logo} style={[styles.logo, {transform: [{ rotate: spin}]}]} />
        { Platform.OS === "web" && (
          <p>This is the website</p>
        )}
        { Platform.OS != "web" && (
          <Text style={styles.welcome}>This is the app</Text>
        )}
      </View>
    );
  }
}

export default Header;
