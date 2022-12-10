import React from 'react'
import { Container, Input, Select } from './styled'

const Filtro = (props) => {
  const { ordenList, filtMin, filtMax, filtNome, setOrdenList, setFiltMin, setFiltMax, setFiltNome } = props;
  const onChangeOrdenList = (event) => {
    setOrdenList(event.target.value)
  }
  const onChangeFiltMin = (event) => {
    setFiltMin(event.target.value)
  }
  const onChangeFiltMax = (event) => {
    setFiltMax(event.target.value)
  }
  const onChangeFiltNome = (event) => {
    setFiltNome(event.target.value)
  }

  return (
    <Container>
      <label>
        <Input 
        type={"text"} 
        placeholder={"Busca por nome"} 
        onChange={onChangeFiltNome} 
        value={filtNome} 
        />
      </label>
      <label>
        <Input 
        type={"number"} 
        placeholder={"Filtrar por valor mínimo"} 
        onChange={onChangeFiltMin} 
        value={filtMin} 
        />
      </label>
      <label>
        <Input 
        type={"number"} 
        placeholder={"Filtrar por valor máximo"} 
        onChange={onChangeFiltMax} 
        value={filtMax} 
        />
      </label>
      <label>
        <Select onChange={onChangeOrdenList} value={ordenList} >
          <option value={""}>Selecione a ordem</option>
          <option value={"nomeCrescente"}>Nome Crescente</option>
          <option value={"nomeDecrescente"}>Nome Decrescente</option>
          <option value={"precoCrescente"}>Preço Crescente</option>
          <option value={"precoDecrescente"}>Preço Decrescente</option>
        </Select>
      </label>
    </Container>
  )
}

export default Filtro