import React from 'react'
import styled from 'styled-components'

const Conatainer= styled.div`
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size:14px;
    font-weight: 500;`

const Anouncement = () => {
  return (
    <Conatainer>Free shipping on orders above 5000!!</Conatainer>
  )
}

export default Anouncement