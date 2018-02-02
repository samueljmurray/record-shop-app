import {
  Platform,
  Dimensions
} from "react-native";

const screenSizes = [
  {
    name: "xs",
    width: 320
  },
  {
    name: "s",
    width: 375
  },
  {
    name: "m",
    width: 768
  }
];

export const fonts = {
  robotoMono: {
    thin: {
      fontFamily: platform({android: "RobotoMono-Thin"}, "Roboto Mono"),
      fontWeight: platform({android: "400"}, "200")
    },
    light: {
      fontFamily: platform({android: "RobotoMono-Light"}, "Roboto Mono"),
      fontWeight: platform({android: "400"}, "300")
    },
    normal: {
      fontFamily: platform({android: "RobotoMono-Regular"}, "Roboto Mono"),
      fontWeight: "400"
    },
    medium: {
      fontFamily: platform({android: "RobotoMono-Medium"}, "Roboto Mono"),
      fontWeight: platform({android: "400"}, "500")
    },
    bold: {
      fontFamily: platform({android: "RobotoMono-Bold"}, "Roboto Mono"),
      fontWeight: platform({android: "400"}, "700")
    }
  }
}

export const defaultText = {
  ...fonts.robotoMono.normal,
  fontSize: 16,
  color: "black"
};

export function platform(valueOptions: Object, defaultValue: any): any {
  if (Platform.OS in valueOptions) {
    return valueOptions[Platform.OS];
  } else {
    return defaultValue;
  }
}

export function screenSize(screenSizeOptions: Object, defaultValue: any): any {
  const matchedScreenSizes = screenSizes.filter((screenSize: Object): boolean => {
    return Dimensions.get("window").width <= screenSize.width;
  });

  let value;
  const hasScreenSizeOption = matchedScreenSizes.some((matchedScreenSize: Object): boolean => {
    if (screenSizeOptions.hasOwnProperty(matchedScreenSize.name)) {
      value = screenSizeOptions[matchedScreenSize.name];
      return true;
    } else {
      return false;
    }
  });
  if (!hasScreenSizeOption) {
    value = defaultValue;
  }
  return value;
}