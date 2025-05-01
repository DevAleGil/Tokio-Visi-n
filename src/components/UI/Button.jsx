import * as s from './ButtonStyles'
import { useNavigate } from "react-router-dom";

export const Button = ({children, path}) => {

  let navigate = useNavigate();
  return (
    <s.ButtonStyles onClick={() => navigate(path)}>
      {children}
    </s.ButtonStyles>
  )
}

