// import { createStore } from "redux";
// import rootReducer from "./reducer/Rootreducer";
// export const store = createStore(rootReducer);

import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducer/Rootreducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer);
let persistor = persistStore(store);
export { store, persistor };
