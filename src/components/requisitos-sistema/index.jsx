import React from "react";
import Container, { Label, Title } from "./styled";

const RequisitosSistema = ({ os, processor, memory, graphics, storage }) => {
  return (
    <Container>
      <Title>Requisitos do Sistema</Title>
      <div>
        <Label>Sistema Operacional: </Label>
        <span>{os}</span>
      </div>
      <div>
        <Label>Processador: </Label>
        <span>{processor}</span>
      </div>
      <div>
        <Label>Memoria: </Label>
        <span>{memory}</span>
      </div>
      <div>
        <Label>Gráficos: </Label>
        <span>{graphics}</span>
      </div>
      <div>
        <Label>Espaço em Disco: </Label>
        <span>{storage}</span>
      </div>
    </Container>
  );
};

export default RequisitosSistema;
