import styled from '@emotion/styled'
import Soon from '../components/Soon'
import React from 'react'
import {mobile} from '../responsive';
import screenshot from "../../src/images/Screenshot.png"


const Container=styled.div`
    display:flex;
    flexDirection:column;
`
const Left=styled.div`
    display:flex;
    float:left;
    ${mobile({ width: "100%"})} 


    
`
const Right=styled.div`
    display:flex;
    float:right;
    ${mobile({ display: "none"})}
    ${mobile({ float: "none"})}

    
`

const Image=styled.img`    
    height:100vh;
    width:50vw;
    ${mobile({ display: "none"})}

`

const commingSoon = () => {
    return (
      <div>
        <Container/>
          <Left><Soon/></Left>
          <Right><Image src={screenshot}/></Right>
        <Container/>
      </div>
    )
  }
  
  export default commingSoon