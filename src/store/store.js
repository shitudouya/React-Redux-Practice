import { createStore, applyMiddleware } from "redux";
import { persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducer from "./reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";
const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 
 };
const myPersistReducer = persistReducer(persistConfig, reducer)
const { composeWithDevTools } = require("redux-devtools-extension");
const store = createStore(myPersistReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
export const persistor = persistStore(store)
export default store;
