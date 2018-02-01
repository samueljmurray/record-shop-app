import { StyleSheet } from 'react-native';
import { defaultText, fonts } from '../../styles';

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
    ...fonts.robotoMono.bold,
    marginTop: 16
  }
});