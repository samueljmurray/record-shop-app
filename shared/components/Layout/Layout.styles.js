import { StyleSheet, Platform } from 'react-native';
import { screenSize, platform } from '../../styles';

export default StyleSheet.create({
  root: {
    flex: 1
  },
  body: {
    flexDirection: screenSize({m: "column"}, "row"),
    marginHorizontal: screenSize({m: 16}, 0)
  },
  nav: {
    flex: 1,
    marginRight: screenSize({m: 0}, 16),
    marginBottom: screenSize({m: 16}, 0)
  },
  listing: {
    marginHorizontal: screenSize({m: 0}, 16),
    flex: 4,
    backgroundColor: "#f9f9f9",
    padding: 16
  }
});
