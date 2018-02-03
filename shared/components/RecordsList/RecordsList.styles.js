import { StyleSheet } from 'react-native';
import { defaultText, fonts } from '../../styles';

export default StyleSheet.create({
  root: {
    flex: 1
  },
  loading: {
    ...defaultText,
    ...fonts.robotoMono.bold
  }
});