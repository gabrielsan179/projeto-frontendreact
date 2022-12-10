import styled from "styled-components"
import fundoCard from '../../img/fundoCard.jpg'

export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 5px;
margin: 10px;
min-width: 200px;
border-radius: 20px;
color: white;
justify-content: center;
background-image: url(${fundoCard});
`
export const Preço = styled.p`
font-family: 'Nabla', cursive;
text-align: center;
font-size: 25px;
`
export const Nome = styled.p`
font-family: 'Nabla', cursive;
text-align: center;
font-size: 15px;
`
export const Button = styled.button`
display: flex;
align-items: center;
border: none;
border-radius: 25px;
padding: 3px;
background-color: yellowgreen;
&:hover {
    background-color: lightblue;
  }
`
export const ImgButton = styled.img`
margin: 0 15px;
width: 34px;
`
export const TextButton = styled.p`
font-size: 14px;
font-weight: 1000;
`
export const Img = styled.img`
margin: 0 auto;
width: 170px;
`