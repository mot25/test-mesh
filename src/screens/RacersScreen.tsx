import {
  AppScreen,
  PADDING_HORIZONTAL_CONTENT,
} from "containers/AppScreenProps";
import { ListRacers } from "components/Racers/ListRacers";
import { RaceHeadTitle } from "components/Racers/RaceHeadTitle";
import React from "react";
import { DropDown, DropDownOptions } from "shared/ui/DropDown";
import { CURRENT_YEAR } from "shared/utils/dateUtils";
import { range } from "lodash";
import { View } from "react-native";
import { IconButton, MD3Colors } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  changeYearDriver,
  deleteYearDriver,
  getYearRace,
} from "Store/slices/raceSlices";
import { DriversYear } from "types/typesRace";
const dataDropDownYear: DropDownOptions[] = range(1950, CURRENT_YEAR).map(
  (item) => ({
    label: item.toString(),
    value: item,
  }),
);
const createOption = (year?: DriversYear): DropDownOptions => {
  if (!year) {
    return createOption(CURRENT_YEAR as DriversYear);
  }
  return { value: year, label: year.toString() };
};
export const RacersScreen = () => {
  const dispatch = useDispatch();
  const valueYear = useSelector(getYearRace);
  const changeYear = (year: DropDownOptions) => {
    if (!year) return;
    dispatch(changeYearDriver(year.value));
  };
  const deleteYear = () => {
    dispatch(deleteYearDriver());
  };

  return (
    <AppScreen
      removePaddingHorizontal={true}
      headProps={{ title: <RaceHeadTitle nameTitle={"Гонщики"} /> }}
    >
      <View
        style={{
          paddingHorizontal: PADDING_HORIZONTAL_CONTENT,
          paddingVertical: 15,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <DropDown
          data={dataDropDownYear}
          setValue={changeYear}
          value={createOption(valueYear)}
        />
        <IconButton
          icon="eraser"
          iconColor={MD3Colors.error50}
          size={40}
          onPress={deleteYear}
        />
      </View>
      <ListRacers />
    </AppScreen>
  );
};
