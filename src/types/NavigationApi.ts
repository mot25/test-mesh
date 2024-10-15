import { NavigationProp } from "@react-navigation/native";
import { AppRoutes } from "shared/navigation/NavConstant";
import { DriversGeneralType } from "types/typesRace";

export interface NavigationTypeParams {
  [AppRoutes.RacersDetail]: {
    racerId: DriversGeneralType["driverId"];
  };
}
export type NavigationTypeProps = NavigationProp<NavigationTypeParams>;
