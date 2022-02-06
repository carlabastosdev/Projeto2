import React, { useState, useEffect } from "react";
import { requestGet } from "../../service/request";
import Card from "../../components/card-game";
import Input from "../../components/input";
import Loader from "../../components/loader";
import Container from "./styled";

const Games = () => {
  const [campoDePesquisa, setCampoDePesquisa] = useState("");
  const [dados, setDados] = useState([]);
  const [dadosTela, setDadosTela] = useState();

  useEffect(() => {
    requestGet("/games").then((response) => {
      setDados(response.data);
      setDadosTela(response.data);
    });
  }, []);

  useEffect(() => {
    const dadosFiltrados = dados.filter((item) =>
      item.title.toUpperCase().includes(campoDePesquisa.toUpperCase())
    );
    setDadosTela(dadosFiltrados);
  }, [campoDePesquisa]);

  if (!dadosTela) {
    return <Loader />;
  }

  return (
    <Container>
      <h1>Jogos</h1>
      <h2>{`Todos os jogos (${dadosTela.length})`}</h2>
      <Input
        label="Pesquisar: "
        onChange={(event) => setCampoDePesquisa(event.target.value)}
      />
      <div className="games-cards">
        {dadosTela.map((item, index) => (
          <Card
            key={index}
            url={`/game-detail/${item.id}`}
            title={item.title}
            genre={item.genre}
            thumbnail={item.thumbnail}
            short_description={item.short_description}
          />
        ))}
      </div>
    </Container>
  );
};

export default Games;
