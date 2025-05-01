import { createSlice } from "@reduxjs/toolkit";
import { ListaCategorias } from "../components/data/ListaCategorias";

const initialState = {
  categorias: ListaCategorias,
  categoriaSeleccionada: "todos",
};

export const categoriasSlice = createSlice({
  name: "categorias",
  initialState,
  reducers: {
    setSeleccionarCategoria: (state, action) => {
      state.categoriaSeleccionada = action.payload;
    },
  },
});

export const { setSeleccionarCategoria } = categoriasSlice.actions;

export default categoriasSlice.reducer;
