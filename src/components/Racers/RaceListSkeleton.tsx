import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import * as React from "react";
import { makeStyles } from "shared/utils/themeUtils";

const useStyles = makeStyles(() => ({
  wrapper: {
    flex: 1,
    padding: 20,
  },
  loadIcon: {
    marginBottom: 20,
  },
  skeletonItem: {
    height: 40,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    marginBottom: 15,
  },
}));

export const RaceListSkeleton = () => {
  const styles = useStyles();
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" style={styles.loadIcon} />
      <View style={styles.skeletonItem}></View>
      <View style={styles.skeletonItem}></View>
      <View style={styles.skeletonItem}></View>
      <View style={styles.skeletonItem}></View>
      <View style={styles.skeletonItem}></View>
    </View>
  );
};
