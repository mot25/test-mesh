import { View } from "react-native";
import { AppHeader, AppHeaderProps } from "components/Navigation/AppHeader";
import React, { PropsWithChildren } from "react";

export interface AppScreenProps extends PropsWithChildren {
  headProps?: AppHeaderProps;
  removePaddingHorizontal?: boolean;
}
export const PADDING_HORIZONTAL_CONTENT = 20;

export const AppScreen = ({
  headProps,
  children,
  removePaddingHorizontal,
}: AppScreenProps) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: removePaddingHorizontal
          ? 0
          : PADDING_HORIZONTAL_CONTENT,
      }}
    >
      <AppHeader {...headProps} />
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
};
