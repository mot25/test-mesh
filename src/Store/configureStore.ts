import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";
import { RacersApi } from "api/apiSlices/RacersApi";

export const apiActions = [RacersApi];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      ...apiActions.map((action) => action.middleware),
    ]),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
