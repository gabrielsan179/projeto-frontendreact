import styled from "styled-components"
import fundoCard from '../../img/fundoCard.jpg'

export const Container = styled.div`
display: flex;
flex-direction: column;
border-left: 2px solid white;
padding: 1vw;
font-family: 'Nabla', cursive;
text-align: center;
gap: 10px;
`
export const RemoveButton = styled.button`
  padding: 8px;
  background-color: red;
&:hover {
    background-color: lightblue;
  }
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Produtos = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 6px 8px;
  background-image: url(${fundoCard});
`
export const ContainerLinha = styled.div`
display: flex;
gap: 50px;
`
export const BuyButton = styled.button`
  padding: 8px;
  background-color: #2E8B57;
&:hover {
    background-color: lightblue;
  }
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`
