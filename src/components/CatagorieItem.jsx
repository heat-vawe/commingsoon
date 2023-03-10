import React from 'react'
import styled from 'styled-components';
import {mobile} from '../responsive';


const Container=styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;`

const Image=styled.img`
    width:100%;
    height:100%;
    opacity:0.4;
    object-fit:cover;
    ${mobile({ height: "30vh" })}
  ` 

const Info=styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center`

const Title=styled.h1`
    color:black;
    margin-bottom:28px`

const Button=styled.button`
        border:none;
        padding:10px;
        background-color:white;
        color:Black;
        coursor:pointer;
        font-weight: 600;
      `



const CatagorieItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>

    </Container>
  )
}

export default CatagorieItem