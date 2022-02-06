import React from "react";
import Container, { Title } from "./styled";

const Informacao = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <div>{description}</div>
    </Container>
  );
};

export default Informacao;
