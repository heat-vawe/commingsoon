import React from 'react'
import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {sliderItems} from "../data"
import { useState } from 'react';
import {mobile} from '../responsive';

const Container= styled.div`
        width: 100%;
        height:100vh;
        display:flex;
        overflow:hidden;
        position:relative;
        ${mobile({ display:"none"})}


`

const ArroW=styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    top:0;
    bottom:0;
    left:${ props=> props.direction === "left" && "10px"};
    right:${ props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor:pointer;
    opacity:0.5;
    z-index:2;
    `

const Wrapper=styled.div`
    height:100%;
    display:flex;
    transition:all 1.5s ease;
    transform:translateX(${props=>props.slideIndex*-100}vw)
`;

const Slide=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color:#${props=>props.bg};
    `



const Image=styled.img`
        height:80%;

`

const ImgContainer=styled.div`
    height:100%;
    flex:1;`
    
const InfoContainer=styled.div`
    padding:50px;
    flex:1;
    `

const Title=styled.h1`
    font-size:70px;
    `



const Description=styled.p`
    margin:50px 0;
    font-weignt:500;
    font-size:20px;
    letter-spacing: 5px;
`
const  Button=styled.button`
    padding:10px;
    font-size:20px;
    cursor:pointer;
    background-color:transparent;
`





const Slider = () => {
    const [slideIndex, setSlideIndex]=useState(0)
    const handleCLick =(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:2)
        }else{
            setSlideIndex(slideIndex<2?slideIndex+1:0)
        }
    }
  return (
    <Container>
        <ArroW direction="left" onClick={()=>handleCLick("left")}>
            <ArrowLeftOutlinedIcon/>
        </ArroW>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
            <Slide key={item.id} bg={item.bg}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <Button>Shop NOW</Button>
                </InfoContainer>
            </Slide>
            ))}
            
        </Wrapper>
        <ArroW direction="right" onClick={()=>handleCLick("right")}>
            <ArrowRightOutlinedIcon/>
        </ArroW>
    </Container>
  )
}

export default Slider