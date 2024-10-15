import { Typography } from "shared/ui/Typography";
import { Icon } from "react-native-paper";
import { View } from "react-native";
import { makeStyles } from "shared/utils/themeUtils";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
}));

interface Props {
  nameTitle: string;
}
export const RaceHeadTitle = ({ nameTitle }: Props) => {
  const styles = useStyles();
  return (
    <View style={styles.root}>
      <Typography variant={"titleLarge"}>{nameTitle}</Typography>
      <Icon size={30} source={"flag-checkered"} />
    </View>
  );
};
