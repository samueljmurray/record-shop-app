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

export const defaultText = {
  fontFamily: "Roboto Mono",
  fontSize: 16
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