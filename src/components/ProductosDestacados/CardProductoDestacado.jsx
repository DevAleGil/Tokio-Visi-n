
import { useNavigate } from "react-router-dom";
import * as s from "./ProductosDestacadosStyles";

export const CardProductoDestacado = ({ titulo, img}) => {

  const navigate = useNavigate()

  const handleClickProductos = () =>{
    navigate('/productos')
  }
  return (
    <s.CardProducto>
      <img src={`/imagenes/${img}`} alt="" />
      <s.ButtonCard onClick={handleClickProductos}>{titulo}</s.ButtonCard>
    </s.CardProducto>
  );
};
