import React from 'react'
import { CardsContainer, Container } from './styled'
import produtos from "../../Produtos/Produtos.json"
import Card from '../Card/Card';

const HomePage = (props) => {
  const { ordenList, filtMin, filtMax, filtNome, listCart, setListCart } = props;

  const addCarrinho = (produto) => {
    const produtoSelecionado = produtos.filter((item) => item === produto)
    if (listCart.includes(produtoSelecionado[0])){
     listCart[listCart.indexOf(produtoSelecionado[0])].quantidade ++
     const novoProduto = listCart[listCart.indexOf(produtoSelecionado[0])]
     const removeProduto = listCart.filter((item) => item !== produto)
     const nova = [...removeProduto, novoProduto]
     setListCart(nova)
    }else{
      const novaLista = [...listCart, produtoSelecionado[0]]
    setListCart(novaLista)
    }
    
  }
  
  return (
    <Container>
      <CardsContainer>
        {produtos.filter((produto) => {
          return filtNome ? produto.nome.toLowerCase().includes(filtNome.toLowerCase()) : produto
          })
          .filter((produto) => {
            return filtMin ? Number(produto.preco) >= Number(filtMin) : produto
          })
          .filter((produto) => {
            return filtMax ? Number(produto.preco) <= Number(filtMax) : produto
          })
          .sort((produtoA, produtoB) => {
            if(ordenList === "nomeCrescente"){
              return produtoA.nome < produtoB.nome ? -1 : 1
            }else if(ordenList === "nomeDecrescente"){
              return produtoA.nome > produtoB.nome ? -1 : 1
            }else if(ordenList === "precoCrescente"){
              return produtoA.preco < produtoB.preco ? -1 : 1
            }else if (ordenList === "precoDecrescente") {
              return produtoA.preco > produtoB.preco ? -1 : 1
            }else {
              return 0
            }
          })
          .map((produto) => {
            return (
              <Card
                key={produto.id}
                produto={produto}
                addCarrinho={addCarrinho}
              />
            )
          })
        }
      </CardsContainer>
    </Container>
  )
}

export default HomePage