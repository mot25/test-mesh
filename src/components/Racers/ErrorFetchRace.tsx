import React from "react";
import { View, Text } from "react-native";
import { Button, Icon } from "react-native-paper";
import { makeStyles } from "shared/utils/themeUtils";
interface Props {
  onRetry: () => void;
}

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },

  errorText: {
    marginTop: 20,
    fontSize: 24,
    color: "#d32f2f",
    fontWeight: "bold",
    textAlign: "center",
  },
  subText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  retryButton: {
    backgroundColor: "#d32f2f",
  },
}));

export const ErrorFetchRace = ({ onRetry }: Props) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Icon source="error-outline" size={80} color="#d32f2f" />
      <Text style={styles.errorText}>Something went wrong</Text>
      <Text style={styles.subText}>Please try again later.</Text>
      <Button mode="contained" onPress={onRetry} style={styles.retryButton}>
        Retry
      </Button>
    </View>
  );
};
