import { StyleSheet } from 'react-native';
import { defaultText } from '../../styles';

export default StyleSheet.create({
  root: {
    marginVertical: 16
  },
  archived: {
    opacity: 0.3
  },
  title: {
    ...defaultText,
    fontWeight: "500",
    textDecorationLine: "underline"
  },
  artistsNames: {
    ...defaultText,
    fontWeight: "300"
  },
  year: {
    ...defaultText,
    fontWeight: "300"
  }
});
