import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Container =styled.div`
    flex:1;
    margin:5px;
    min-width:290px;
    height:380px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position:relative;`

const Circle =styled.div`
        width:270px;
        height:270px;
        border-radius:50%;
        position:absolute;
        background-color:#f9fbfd;

`

const Imgage =styled.img`
    width:75%;
    z-index:2;
    `

const Info =styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index:3;
    display:flex;
    justify-content:center;
    align-items:center;
    

    &:hover{
        opacity:1;
        transition:all 0.5s ease ;
    }
    `

const Icon =styled.div`
     width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    cursor:pointer;

    transition:all 0.5s ease  ;
    &:hover{
        background-color:#c9f5f5;
        transform:scale(1.1)
    }
    `

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Imgage src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon/>
            </Icon>
            <Icon>
                <SearchOutlinedIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product