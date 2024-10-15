import { Provider } from "react-redux";
import React, { PropsWithChildren } from "react";
import { persistor, store } from "Store/configureStore";
import { PersistGate } from "redux-persist/integration/react";

export const StoreContainer = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};
