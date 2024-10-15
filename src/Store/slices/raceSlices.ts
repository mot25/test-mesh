import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "Store/configureStore";
import { DriversYear } from "types/typesRace";
import { PersistConfig } from "redux-persist";
interface InitialStateRacer {
  year?: DriversYear;
}
const initialState: InitialStateRacer = {
  year: undefined,
};
export const racerReducerPersistConfig: Partial<
  PersistConfig<InitialStateRacer>
> = {
  whitelist: ["year"],
};
const racerSlice = createSlice({
  name: "race",
  initialState,
  reducers: {
    changeYearDriver: (state, action: PayloadAction<DriversYear>) => {
      state.year = action.payload;
    },
    deleteYearDriver: (state) => {
      state.year = 0;
    },
  },
});
export default racerSlice.reducer;

export const { changeYearDriver, deleteYearDriver } = racerSlice.actions;

export const getYearRace = (state: RootState) => state.racerSlice.year;
