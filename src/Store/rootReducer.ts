import AsyncStorage from "@react-native-async-storage/async-storage";
import { RacersApi } from "api/apiSlices/RacersApi";
import racerSlice, { racerReducerPersistConfig } from "Store/slices/raceSlices";
import { persistReducer } from "redux-persist";

const storage = AsyncStorage;

export const rootReducer = {
  racerSlice: persistReducer(
    { storage, key: "race", ...racerReducerPersistConfig },
    racerSlice,
  ),
  [RacersApi.reducerPath]: RacersApi.reducer,
};
