import React, { useEffect, useState } from 'react'
import Carrinho from '../Carrinho/Carrinho';
import HomePage from '../HomePage/HomePage';
import { Container } from './styled';

const MainPage = (props) => {
    const { ordenList, filtMin, filtMax, filtNome } = props;

    const [listCart, setListCart] = useState(JSON.parse(localStorage.getItem("listCart")))

    useEffect(() => {
      const listCartString = JSON.stringify(listCart)
      localStorage.setItem("listCart", listCartString )
    }, [listCart])

  return (
    <Container>
    <HomePage
    ordenList={ordenList}
    filtMin={filtMin}
    filtMax={filtMax}
    filtNome={filtNome}
    listCart={listCart}
    setListCart={setListCart}
    />
    <Carrinho
    listCart={listCart}
    setListCart={setListCart}
    />
    </Container>
  )
}

export default MainPage