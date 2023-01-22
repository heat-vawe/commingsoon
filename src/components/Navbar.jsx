import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import {mobile} from '../responsive';

const Container=styled.div 
    `height:60px;
     ${mobile({Height:"50px"})}
    `

const Wrapper=styled.div 
    `padding:10px 20px;
    display:flex;
    justify-content:space-between;
    ${mobile({padding:"10px 0"})}
    `    

const Left =styled.div
    `flex:1;
    display:flex
    align-items: center`;


const LAnguage =styled.div`
    font-size:14px;
    cursor:pointer;
    display:flex;
    align-items: center;
    ${mobile({display:"none"})}

`

const SearchContainer=styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items: center;
    margin-left: 25px;
    padding:5px;
    ${mobile({ marginLeft: "10px"})};
    `

const Input=styled.input`
    border:none;
    ${mobile({ width: "50px" })};

    `

const Centre =styled.div
    `flex:1;
    ${mobile({ flex:"1.7",justifyContent: "Center"})}

    `;

const Logo=styled.h1`
    font-weight: bold;
    text-align: center;
    ${mobile({ fontSize: "40px" })}
`

const Right =styled.div
    `flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({ justifyContent: "Center" , flex:"2"})}
    `;

const MenuItems=styled.div`
    dispaly:flex;
    margin-left:25px;
    ${mobile({ fontSize: "13px",marginLeft:"8px" })}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
            <LAnguage>EN</LAnguage>
            <SearchContainer>
                <Input placeholder='Search'></Input>
                <Search style={{color:"grey", fontSize:16}}/>  
            </SearchContainer>
        </Left>
        <Centre>
            <Logo>VANS.</Logo>
        </Centre>
        <Right>
            <MenuItems>Register</MenuItems>
            <MenuItems>Sign-in</MenuItems>
            <MenuItems>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon/>
                </Badge>
            </MenuItems>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar