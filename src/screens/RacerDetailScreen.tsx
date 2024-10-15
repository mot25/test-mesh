import React from "react";
import { Text, ScrollView, Linking } from "react-native";
import { useGetRacerDetailQuery } from "api/apiSlices/RacersApi";
import { useParams } from "hooks/useParams";
import { NavigationTypeParams } from "types/NavigationApi";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { ErrorFetchRace } from "components/Racers/ErrorFetchRace";
import { RaceDetailSkeleton } from "components/Racers/RaceDetailtSkeleton";
import { makeStyles } from "shared/utils/themeUtils";

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 10,
    textAlign: "center",
  },
  backButton: {
    width: 150,
    marginTop: 20,
  },
}));

export const RacerDetailScreen = () => {
  const styles = useStyles();
  const { racerId } = useParams<NavigationTypeParams["RacersDetail"]>();
  const navigation = useNavigation();
  const { data, error, isFetching, refetch } = useGetRacerDetailQuery(racerId);
  const racer = data?.MRData.DriverTable.Drivers[0]; // Получаем данные гонщика

  const goBack = navigation.goBack;
  const openWiki = () => {
    if (racer) Linking.openURL(racer.url);
  };

  if (isFetching) {
    return <RaceDetailSkeleton goBack={goBack} />;
  }

  if (error || !racer) {
    return <ErrorFetchRace onRetry={refetch} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text
        style={styles.name}
      >{`${racer.givenName} ${racer.familyName}`}</Text>
      <Text style={styles.info}>Date of Birth: {racer.dateOfBirth}</Text>
      <Text style={styles.info}>Nationality: {racer.nationality}</Text>

      <Text style={styles.link} onPress={openWiki}>
        More Info on Wikipedia
      </Text>

      <Button mode="contained" onPress={goBack} style={styles.backButton}>
        Back
      </Button>
    </ScrollView>
  );
};
