import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { requestGet } from "../../service/request";
import Loader from "../../components/loader";
import Informacao from "../../components/informacao";
import Container, {
  Comentarios,
  Description,
  Image,
  ImageCarrossel,
  Informations,
  RequisitosDoSistema,
  Title,
} from "./styled";
import RequisitosSistema from "../../components/requisitos-sistema";
import Parser from "html-react-parser";
import Formulario from "./components/formulario";
import Postagem from "../../components/Postagem";

const comentariosSessionName = "comentarios";

const GamesDetail = () => {
  const { id } = useParams();
  const [gameDetail, setGameDetail] = useState();
  const [imagemPrincipal, setImagemPrincipal] = useState();
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    requestGet("/game", { id: id }).then((response) => {
      setGameDetail(response.data);
      setImagemPrincipal(response.data.screenshots[0].image);
    });
    setComentarios(JSON.parse(sessionStorage.getItem(comentariosSessionName)) || []);
  }, []);

  const handleEnviarComentario = (postagem) => {
    const novosComentarios = [...comentarios, postagem];
    setComentarios(novosComentarios);
    sessionStorage.setItem(comentariosSessionName, JSON.stringify(novosComentarios));
  };

  const handleClickImage = (index) => {
    setImagemPrincipal(gameDetail.screenshots[index].image);
  };

  if (!gameDetail) {
    return <Loader />;
  }

  const { os, processor, memory, graphics, storage } =
    gameDetail.minimum_system_requirements;

  return (
    <Container>
      <Title>{gameDetail.title}</Title>
      <div>
        <Image src={imagemPrincipal} />
        <div>
          {gameDetail.screenshots.map((item, index) => {
            return (
              <ImageCarrossel
                key={index}
                src={item.image}
                onClick={() => handleClickImage(index)}
              />
            );
          })}
        </div>
      </div>

      <Informations>
        <Informacao title={"Genero"} description={gameDetail.genre} />
        <Informacao title={"Plataforma"} description={gameDetail.platform} />
        <Informacao
          title={"Desenvolvedor"}
          description={gameDetail.developer}
        />
        <Informacao title={"Editora"} description={gameDetail.publisher} />
        <Informacao
          title={"Lançamento"}
          description={gameDetail.release_date}
        />
      </Informations>

      <Description>{Parser(gameDetail.description)}</Description>

      <RequisitosDoSistema>
        <RequisitosSistema
          os={os}
          processor={processor}
          memory={memory}
          graphics={graphics}
          storage={storage}
        />
      </RequisitosDoSistema>

      <Comentarios>
        <Formulario handleSubmit={handleEnviarComentario} />
      </Comentarios>

      {
        comentarios.map((item, index) => {
          return <Postagem key={index} nome={item.nome} comentario={item.comentario} />
        })
      }
    </Container>
  );
};

export default GamesDetail;
