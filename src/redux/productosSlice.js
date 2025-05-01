import { createSlice } from "@reduxjs/toolkit";
import { ListaProductos } from "../components/data/ListaProductos";


const initialState = {
  productos: ListaProductos,
};

export const productosSlice = createSlice({
  name: "productos",
  initialState,
  reducers: {
    getProductos: (state,actions) => {
      return actions.payload
    }
  },
});

export const { getProductos } = productosSlice.actions;
export default productosSlice.reducer;
