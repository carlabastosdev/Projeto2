import React from "react";
import Container, { Nome, Comentario } from "./styled";

const Postagem = ({ nome, comentario }) => {
  return (
    <Container>
      <Nome>{nome}: </Nome>
      <Comentario>{comentario}</Comentario>
    </Container>
  );
};

export default Postagem;
