import * as React from "react";
import { DataTable } from "react-native-paper";
import { FlatList } from "react-native";
import { useGetRacersQuery } from "api/apiSlices/RacersApi";
import { RaceListSkeleton } from "components/Racers/RaceListSkeleton";
import { useEffect, useState } from "react";
import { ErrorFetchRace } from "components/Racers/ErrorFetchRace";
import { useNavigation } from "@react-navigation/native";
import { NavigationTypeProps } from "types/NavigationApi";
import { AppRoutes } from "shared/navigation/NavConstant";
import { DriversGeneralType } from "types/typesRace";
import { useSelector } from "react-redux";
import { getYearRace } from "Store/slices/raceSlices";

export const ListRacers = () => {
  const navigation = useNavigation<NavigationTypeProps>();
  const valueYear = useSelector(getYearRace);

  const [page, setPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState(30);
  const { data, isFetching, isError, refetch } = useGetRacersQuery({
    page,
    limit: itemsPerPage,
    year: valueYear,
  });
  const racers = data?.MRData?.DriverTable?.Drivers || [];
  const totalItems = parseInt(data?.MRData?.total || "0", 10); // общее количество гонщиков

  const from = page * itemsPerPage + 1;
  const to = Math.min((page + 1) * itemsPerPage, totalItems);

  const toDetail = (racerId: DriversGeneralType["driverId"]) => {
    navigation.navigate(AppRoutes.RacersDetail, { racerId });
  };

  useEffect(() => {
    setPage(0);
  }, [valueYear]);

  if (isError) {
    return <ErrorFetchRace onRetry={refetch} />;
  }

  return (
    <DataTable style={{ flex: 1 }}>
      <DataTable.Header>
        <DataTable.Title>First Name</DataTable.Title>
        <DataTable.Title>Last Name</DataTable.Title>
        <DataTable.Title>Nationality</DataTable.Title>
      </DataTable.Header>

      {isFetching ? (
        <RaceListSkeleton />
      ) : (
        <FlatList
          data={racers}
          renderItem={({ item }) => (
            <DataTable.Row
              onPress={() => toDetail(item.driverId)}
              key={item.driverId}
            >
              <DataTable.Cell>{item.givenName}</DataTable.Cell>
              <DataTable.Cell>{item.familyName}</DataTable.Cell>
              <DataTable.Cell>{item.nationality}</DataTable.Cell>
            </DataTable.Row>
          )}
          keyExtractor={(item) => item.driverId}
        />
      )}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(totalItems / itemsPerPage)}
        onPageChange={(newPage) => setPage(newPage)}
        label={`${from}-${to} of ${totalItems}`}
        numberOfItemsPerPageList={[30, 60, 90]}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={setItemsPerPage}
        selectPageDropdownLabel={"Rows per page"}
        showFastPaginationControls={true}
      />
    </DataTable>
  );
};
