import React from 'react'
import styled from 'styled-components';
import {categories} from '../data';
import CatagorieItem from './CatagorieItem';
import {mobile} from '../responsive';

const Container=styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    ${mobile({ padding: "0" , flexDirection:"column"})}
`

const Catagories = () => {
  return (
    <Container>
      {categories.map((item)=>(
        <CatagorieItem key={item.id} item={item}/>
      ))}  
    </Container>
  )
}

export default Catagories