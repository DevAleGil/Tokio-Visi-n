import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carritoProductos: [],
  
};

const carritoSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    agregarAlCarrito: (state, action) => {
      const producto = action.payload;

      const productoExistente = state.carritoProductos.find(
        (item) => item.id === producto.id
      );

      if (productoExistente) {
        productoExistente.cantidad += 1;
      } else {
        state.carritoProductos.push({ ...producto, cantidad: 1 });
      }
    },
    eliminarProductoCarrito: (state, action) => {
      state.carritoProductos = state.carritoProductos.filter(
        (item) => item.id !== action.payload
      );
    },

    incrementarCantidad: (state, action) => {
      const productoExistente = state.carritoProductos.find(
        (item) => item.id === action.payload
      );

      if (productoExistente) {
        productoExistente.cantidad += 1;
      }
    },

    disminuirCantidad: (state, action) => {
      const productoExistente = state.carritoProductos.find(
        (item) => item.id === action.payload
      );

      if (productoExistente) {
        if (productoExistente.cantidad === 1) {
          state.carritoProductos = state.carritoProductos.filter(
            (item) => item.id !== action.payload
          );
        } else {
          productoExistente.cantidad -= 1;
        }
      }
    },

    borrarCarrito: (state) => {
      state.carritoProductos = [];
    },
    finalizarCompra: (state) => {
      state.carritoProductos = [];
    },
  },
});

export const {
  agregarAlCarrito,
  eliminarProductoCarrito,
  incrementarCantidad,
  disminuirCantidad,
  borrarCarrito,
  finalizarCompra,
} = carritoSlice.actions;
export default carritoSlice.reducer;

export const unidadesTotalProductos = (state) =>
  state.carrito.carritoProductos.reduce(
    (total, item) => total + item.cantidad,
    0
  );
export const importeTotalCompra = (state) =>
  state.carrito.carritoProductos.reduce((total, item) => {
    return total + item.price * item.cantidad;
  }, 0);
