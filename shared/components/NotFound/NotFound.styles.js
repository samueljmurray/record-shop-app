import { Dimensions, StyleSheet } from 'react-native';
import { defaultText, fonts } from '../../styles';

const imageWidth = Dimensions.get("window").width - 32;

export default StyleSheet.create({
  root: {
    marginTop: 32,
    alignItems: "center"
  },
  message: {
    ...defaultText,
    ...fonts.robotoMono.bold,
    fontSize: 22
  }
});