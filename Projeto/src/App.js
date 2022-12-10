import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Filtro from "./Componentes/Filtro/Filtro";
import Header from "./Componentes/Header/Header";
import MainPage from "./Componentes/MainPage/MainPage";
import fundo from "./img/fundo.jpg";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`;
const Container = styled.div`
  background-image: url(${fundo});
  width: 100%;
  height: 100%;
`;

const App = () => {
  const [ordenList, setOrdenList] = useState("");
  const [filtMin, setFiltMin] = useState("");
  const [filtMax, setFiltMax] = useState("");
  const [filtNome, setFiltNome] = useState("")

  console.log(ordenList)

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Filtro
        ordenList={ordenList}
        filtMin={filtMin}
        filtMax={filtMax}
        filtNome={filtNome}
        setOrdenList={setOrdenList}
        setFiltMin={setFiltMin}
        setFiltMax={setFiltMax}
        setFiltNome={setFiltNome}
        />
        <MainPage
        ordenList={ordenList}
        filtMin={filtMin}
        filtMax={filtMax}
        filtNome={filtNome}
        />
      </Container>
    </>
  );
};

export default App;
