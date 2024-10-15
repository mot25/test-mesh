import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootTab } from "stacks/RootTab";
export const NavContainer = () => {
  return (
    <NavigationContainer>
      <RootTab />
    </NavigationContainer>
  );
};
