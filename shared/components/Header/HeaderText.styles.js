import { StyleSheet } from 'react-native';
import { defaultText, fonts } from '../../styles';

export default StyleSheet.create({
  root: {
    ...defaultText,
    ...fonts.robotoMono.bold,
    marginTop: 16
  }
});