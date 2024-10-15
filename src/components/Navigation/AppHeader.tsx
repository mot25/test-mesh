import React from "react";
import { Text } from "react-native";
import { ReactNode } from "react";
import { isString } from "lodash";

export interface AppHeaderProps {
  title?: string | ReactNode;
}
export const AppHeader = ({ title }: AppHeaderProps) => {
  if (isString(title)) return <Text>{title}</Text>;

  return title;
};
