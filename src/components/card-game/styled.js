import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled(Link)`
  width: 400px;
  height: 500px;
  color: #212121;
  border: 1px solid;
  box-shadow: 0 0 7px #888888;
  border-radius: 7px;
  margin: 5px;

  .card-link {
    text-decoration: none;
  }

  .card-imagem {
    width: 100%;
    border-radius: 7px;
  }

  .card-descricao {
    padding: 0px 5px;
  }
`;

export default Container;
