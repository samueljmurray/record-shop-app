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
      fontFamily: platform({
        android: "RobotoMono-Thin",
        ios: "Roboto Mono"
      }),
      fontWeight: platform({
        android: "400",
        ios: "200"
      })
    },
    light: {
      fontFamily: platform({
        android: "RobotoMono-Light",
        ios: "Roboto Mono"
      }),
      fontWeight: platform({
        android: "400",
        ios: "300"
      })
    },
    normal: {
      fontFamily: platform({
        android: "RobotoMono-Regular",
        ios: "Roboto Mono"
      }),
      fontWeight: "400"
    },
    medium: {
      fontFamily: platform({
        android: "RobotoMono-Medium",
        ios: "Roboto Mono"
      }),
      fontWeight: platform({
        android: "400",
        ios: "500"
      })
    },
    bold: {
      fontFamily: platform({
        android: "RobotoMono-Bold",
        ios: "Roboto Mono"
      }),
      fontWeight: platform({
        android: "400",
        ios: "700"
      })
    }
  }
}

export const defaultText = {
  ...fonts.robotoMono.normal,
  fontSize: 16,
  color: "black"
};

export function platform(valueOptions: Object): any {
  return valueOptions[Platform.OS];
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