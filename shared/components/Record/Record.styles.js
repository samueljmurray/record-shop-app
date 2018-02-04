import { Dimensions, StyleSheet } from 'react-native';
import { defaultText, fonts } from '../../styles';

const imageWidth = Dimensions.get("window").width - 32;

export default StyleSheet.create({
  root: {
    alignItems: "center"
  },
  title: {
    ...defaultText,
    ...fonts.robotoMono.bold,
    fontSize: 22,
    textAlign: "center",
    marginTop: 16
  },
  artistsNames: {
    ...defaultText,
    fontSize: 18,
    textAlign: "center",
    marginTop: 16
  },
  year: {
    ...defaultText,
    textAlign: "center",
    marginTop: 16
  },
  image: {
    height: imageWidth,
    width: imageWidth,
    maxWidth: 300,
    maxHeight: 300,
    resizeMode: "cover"
  },
  info: {
    paddingHorizontal: 16
  }
});