import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export const wp = (percentage: number) => {
  const width = deviceWidth;
  return (percentage * width) / 100;
};
export const hp = (percentage: number) => {
  const height = deviceHeight;
  return (percentage * height) / 100;
};

export const stripHtmlTags = (html: any) => {
  return html.replace(/<[^>]*>?/gm, "");
};

export const getColumnCount = () => {
  if (deviceWidth >= 1024) {
    // desktop
    return 4;
  } else if (deviceWidth >= 768) {
    // tablet
    return 3;
  } else {
    // phone
    return 2;
  }
};

export const getImageSize = (height: number, width: number) => {
  if (width > height) {
    // landscape
    return 250;
  } else if (width < height) {
    // portrait
    return 300;
  } else {
    // square
    return 200;
  }
};

export const capitalize = (str: any) => {
  return str.replace(/\b\w/g, (l: any) => l.toUpperCase());
};
