import { StyleSheet } from 'react-native';
import { defaultText } from '../../styles';

export default StyleSheet.create({
  root: {
    padding: 20,
    alignItems: "center"
  },
  logo: {
    height: 120,
    width: 120,
    resizeMode: "contain"
  },
  welcome: {
    ...defaultText,
    fontWeight: "700",
    marginTop: 16
  }
});