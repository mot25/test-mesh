import React from "react";
import { MyPage } from "screens/MyPage";
import { AppRoutes } from "shared/navigation/NavConstant";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Icon } from "react-native-paper";
import { RaceStack } from "stacks/RaceStack";
import { makeStyles } from "shared/utils/themeUtils";

const Tab = createMaterialBottomTabNavigator();
const useStyles = makeStyles((theme) => ({
  barStyle: {
    backgroundColor: theme.colors.secondaryContainer,
  },
}));

export const RootTab = () => {
  const styles = useStyles();
  return (
    <Tab.Navigator
      initialRouteName={AppRoutes.RacersStack}
      barStyle={styles.barStyle}
      shifting={true}
    >
      <Tab.Screen
        name={AppRoutes.Resume}
        component={MyPage}
        options={{
          tabBarLabel: "Мое резюме",
          tabBarIcon: ({ color }) => (
            <Icon source="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name={AppRoutes.RacersStack}
        component={RaceStack}
        options={{
          tabBarLabel: "Гонщики",
          tabBarIcon: ({ color }) => (
            <Icon source="car" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
