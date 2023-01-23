import React, { useState } from 'react';
import useSound from 'use-sound';
import SendIcon from '@mui/icons-material/Send';
import Yame from '../../src/sounds/Yamete.wav';
import styled from 'styled-components'
import {mobile} from '../responsive';
import {db} from '../firebase'
import thankyow from '../../src/images/thankyow.jpg'
import { collection, addDoc } from "firebase/firestore";

const Button=styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
    `

const Input=styled.input`
    border:none;
    flex:8;
    padding-left:20px;
    

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

const Alert=styled.img`
      height:400px;
      width:450px;
`

const BoopButton = () => {
  const [play] = useSound(Yame);

  const [input,setInput]=useState("");
  const [Message,setMessage]=useState("");
  const inputhandler=(i)=>{
    setInput(i.target.value)
  };
  const submitHandler=async (i)=>{
    i.preventDefault();
    if (input){
      console.log(input)
      
      await addDoc(collection(db, "commingEmails"), {
        email:input,
      }).then([play]);
      setInput("");
      setMessage("aaa")
    }
  }

  return<form onSubmit={submitHandler}>
            <InputContainer>
              <Input onClick={play} onChange={inputhandler} value={input} type='email' placeholder='Your email'/>
              <Button type='submit'><SendIcon/></Button>
            </InputContainer>
              {Message && <Alert  src={thankyow}/> }
        </form>
        
};

export default BoopButton