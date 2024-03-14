import { configureStore } from "@reduxjs/toolkit";

import { saleseducer } from "./features/sales";

export const makeStore = () => {
  return configureStore({
    reducer: {
      saleseducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
