import React from "react";
import Container from "./styled";

const Card = ({ url, title, genre, thumbnail, short_description }) => {
  return (
    <Container to={url}>
      <div className="card-container">
        <img className="card-imagem" src={thumbnail} />
        <h3>{`${title} - ${genre}`}</h3>
        <div className="card-descricao">{short_description}</div>
        <br />
      </div>
    </Container>
  );
};

export default Card;
