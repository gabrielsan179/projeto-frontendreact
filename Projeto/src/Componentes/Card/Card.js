import React from 'react'
import { Button, Container, ImgButton, Nome, Preço, TextButton, Img } from './styled'
import botao from '../../img/cart-add.png'
import ImagemProduto from '../../Produtos/ImagemProduto'


const Card = (props) => {
  const { image, nome, preco } = props.produto
  const { produto, addCarrinho } = props
 
  return (
    <Container>
      <Img src={ImagemProduto(image)} alt={image}/>
      <Nome>{nome}</Nome>
      <Preço>{preco} R$</Preço>
      <Button onClick={()=>addCarrinho(produto)}><ImgButton src={botao} alt="botao"/><TextButton>ADD TO CART</TextButton></Button>
    </Container>
  )
}

export default Card