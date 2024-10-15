import { PaperProvider } from "react-native-paper";
import React, { PropsWithChildren } from "react";
export const ThemeContainer = ({ children }: PropsWithChildren) => {
  return <PaperProvider>{children}</PaperProvider>;
};
