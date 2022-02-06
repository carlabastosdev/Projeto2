import React from "react";
import Container from "./styled";

const Card = ({ key, thumbnail, title, short_description, article_url }) => {
  return (
    <Container>
      <img src={thumbnail} />
      <div className="noticias-conteudo">
        <h3>Título: {title}</h3>
        <span>{short_description}</span>
        <div>
          <button href="#" onClick={() => window.open(article_url, "_blank")}>
            ver mais
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Card;
