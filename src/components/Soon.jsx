import React from 'react'
import styled,{keyframes} from 'styled-components'
import {mobile} from '../responsive';
import InstagramIcon from '@mui/icons-material/Instagram';
import BoopButton from '../components/Playsound';


const Container=styled.div`
  height:100vh;
  width:50vW;
  background-color:#fcf5f5;
  display:flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  ${mobile({ width: "100vw",height:"100vh"})} 
  


`

const Info=styled.span`
      margin-left:50px;
      ${mobile({ margin: "10px"})} 
`
const typing=keyframes`from{width:0}`
const cursor=keyframes`50%{border-color:transparent}`

const TItle=styled.h1`
    display:inline-block;
    font-size:60px;
    margin-bottom:20px;
    letter-spacing:6px;
    border-right: 3px solid;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation: ${typing} 2s steps(30), 
              ${cursor} .4s step-end infinite alternate;   
    ${mobile({ margin: 0, fontSize:"13px", })} 

`

const Decs=styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "Left",fontSize:"18px"})}

    `
const InputContainer=styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;  
    border:1px solid lightgray;
    margin-bottom:20px;
    ${mobile({ width: "10%"})}

`
const Input=styled.input`
    border:none;
    flex:8;
    padding-left:20px;
    

    `
const Button=styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
    `
const Insta=styled.a`
      margin-top:10px;`


const Newsletter = () => {
  return (
    <Container>
      <Info>
      <TItle>Heat Vawe is coming</TItle>
        <Decs>Get Notified!!</Decs>
          {/* <InputContainer> */}
          {/* <form action='post' > */}
            {/* <Input placeholder='Your email'/>    */}
            <BoopButton/>
          {/* </form> */}
          {/* </InputContainer> */}
          <Button><Insta href="https://www.instagram.com/heat_vawe/" style={{ color:"White"}}><InstagramIcon/></Insta></Button>
      </Info>
    </Container>
  )
}

export default Newsletter