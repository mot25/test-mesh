import { MD3Theme } from "react-native-paper/src/types";

import { ThemeProp } from "react-native-paper/lib/typescript/types";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export type NamedStylesFunc<T> = (theme: MD3Theme) => T;
export type MakeStylesResultType<T> = () => NamedStyles<T> | NamedStyles<any>;

export type ThemeProps = ThemeProp;
