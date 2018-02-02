import { StyleSheet } from 'react-native';
import { defaultText, fonts } from '../../styles';

export default StyleSheet.create({
  root: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#F7F7F7"
  },
  loadMore: {
    ...defaultText,
    textAlign: "center",
    textDecorationLine: "underline"
  },
  loading: {
    ...defaultText,
    ...fonts.robotoMono.bold
  }
});
