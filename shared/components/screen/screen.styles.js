import { Dimensions, Platform, StyleSheet } from 'react-native';
import { screenSize, platform } from '../../styles';

export default StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: screenSize({m: 16}, 0),
    backgroundColor: "#f2f2f2",
    alignItems: platform({web: "center"}, "stretch")
  },
  inner: {
    flex: 1,
    marginHorizontal: screenSize({m: 0}, 16),
    backgroundColor: "#ffffff",
    width: platform({web: "calc(100vw - 32px)"}, "auto"),
    minHeight: platform({web: "100vh"}, "auto"),
    maxWidth: 800
  }
});
