import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import productosReducer from "./productosSlice";
import categoriasReducer from "./categoriasSlice";
import carritoReducer from "./carritoSlice";

const reducers = combineReducers({
  productos: productosReducer,
  categorias: categoriasReducer,
  carrito: carritoReducer,
});

const persistConfiguracion = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfiguracion, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
