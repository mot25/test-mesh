import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppRoutes } from "shared/navigation/NavConstant";
import { RacersScreen } from "screens/RacersScreen";
import { RacerDetailScreen } from "screens/RacerDetailScreen";
import React from "react";

const Stack = createNativeStackNavigator();
export const RaceStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={AppRoutes.Racers}
    >
      <Stack.Screen name={AppRoutes.Racers} component={RacersScreen} />
      <Stack.Screen
        name={AppRoutes.RacersDetail}
        component={RacerDetailScreen}
      />
    </Stack.Navigator>
  );
};
