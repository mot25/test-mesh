import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { makeStyles } from "shared/utils/themeUtils";
interface Props {
  goBack: () => void;
}

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
    justifyContent: "flex-start",
  },
  skeletonItem: {
    backgroundColor: "#e0e0e0",
    height: 40,
    marginBottom: 10,
    borderRadius: 4,
  },
  skeletonText: {
    color: "#e0e0e0",
    fontSize: 16,
  },
  backButton: {
    marginTop: 20,
  },
}));

export const RaceDetailSkeleton = ({ goBack }: Props) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.skeletonItem}>
        <Text style={styles.skeletonText}>Loading...</Text>
      </View>
      <View style={styles.skeletonItem}>
        <Text style={styles.skeletonText}>Date of Birth: </Text>
      </View>
      <View style={styles.skeletonItem}>
        <Text style={styles.skeletonText}>Nationality: </Text>
      </View>
      <View style={styles.skeletonItem}>
        <Text style={styles.skeletonText}>More Info on Wikipedia</Text>
      </View>
      <Button mode="contained" onPress={goBack} style={styles.backButton}>
        Back
      </Button>
    </View>
  );
};
