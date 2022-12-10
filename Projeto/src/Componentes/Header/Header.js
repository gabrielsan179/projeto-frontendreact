import React from 'react'
import { Container, Img } from './styled'
import logo from '../../img/logo.png'

const Header = () => {
  return (
    <Container>
        <Img src={logo} alt="logo" />
    </Container>
  )
}

export default Header