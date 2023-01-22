import React from 'react';
import useSound from 'use-sound';
import SendIcon from '@mui/icons-material/Send';
import Yame from '../../src/sounds/Yamete.wav';
import styled from 'styled-components'

const Button=styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
    `

const BoopButton = () => {
  const [play] = useSound(Yame);
  return <Button onClick={play}><SendIcon/></Button>;
};

export default BoopButton