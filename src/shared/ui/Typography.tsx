import { Text } from "react-native-paper";
import { Props as PropsText } from "react-native-paper/src/components/Typography/Text";
import { PropsWithChildren } from "react";
import React from "react";

// @ts-ignore
interface Props extends PropsText<string>, PropsWithChildren {}
export const Typography = (props: Props) => {
  return <Text {...props} />;
};
