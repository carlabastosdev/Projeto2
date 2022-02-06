import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import GamesDetail from "../pages/game-detail";
import Games from "../pages/games";
import Noticias from "../pages/noticias";

const Container = styled.div`
  width: 100%;
  margin: 100px 0px 50px 0px;
`;

const Routers = () => {
  return (
    <Container>
      <Routes>
        <Route path="/game-detail/:id" element={<GamesDetail />} />
        <Route path="/games" element={<Games />} />
        <Route path="/" element={<Noticias />} />
      </Routes>
    </Container>
  );
};

export default Routers;
