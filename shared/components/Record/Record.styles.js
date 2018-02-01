import { StyleSheet } from 'react-native';
import { defaultText, fonts } from '../../styles';

export default StyleSheet.create({
  root: {
    flex: 1,
    marginVertical: 16
  },
  archived: {
    opacity: 0.3
  },
  title: {
    ...defaultText,
    ...fonts.robotoMono.medium,
    textDecorationLine: "underline"
  },
  artistsNames: {
    ...defaultText,
    ...fonts.robotoMono.light
  },
  year: {
    ...defaultText,
    ...fonts.robotoMono.light
  }
});
