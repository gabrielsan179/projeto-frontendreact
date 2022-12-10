import React, { useEffect, useState }  from 'react'
import { BuyButton, Container, ContainerLinha, Produtos, RemoveButton } from './styled'
import lixeira from "../../img/lixeira.png";

const Carrinho = (props) => {
  const { listCart, setListCart } = props
  const [total, setTotal] = useState(0)
  const removeCarrinho = (produto) => {
    const produtoSeleSetQuant = listCart.filter((item) => item === produto)
    produtoSeleSetQuant[0].quantidade = 1
    setListCart(produtoSeleSetQuant)
    const produtoSelecionadoRemove = listCart.filter((item) => item !== produto)
    setListCart(produtoSelecionadoRemove)
  }
  const comprar = (produtos) => {
    for (const produto of produtos) {
      produto.quantidade = 1
    }
    setListCart([])
  }
  useEffect(() => {
    const valorTotal = () => {
      const totalDeUm = listCart.map((produto) => produto.quantidade*produto.preco)
      const soma = (valor) => {
        let meuTotal = 0
        for (let meuValor of valor) {
          meuTotal += Number(meuValor)
        }
        return meuTotal
      }
      const somaTotal = soma(totalDeUm)
      setTotal(somaTotal)
    }
    valorTotal()
  }, [listCart])

  return (
    <Container>
      <p>Meu Carrinho</p>
      <ul>
        {listCart.map((produto) => {
          return(
            <Produtos>
              <p>{produto.nome}</p>
              <ContainerLinha>
                <p>Quant: {produto.quantidade}</p>
                <p>{produto.preco}</p>
              </ContainerLinha>
              <RemoveButton onClick={() => removeCarrinho(produto)} >
                <img src={lixeira} alt="" width="20px" />
              </RemoveButton>
            </Produtos>
          )
        })}
      </ul>
      <ContainerLinha>
        <p>Total:</p>
        <p>{total} R$</p>
      </ContainerLinha>
      <BuyButton onClick={() => comprar(listCart)} >
        Finalizar Compra
      </BuyButton>
    </Container>
  )
}

export default Carrinho