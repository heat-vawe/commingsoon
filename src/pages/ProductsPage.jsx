import React from 'react'
import styled from 'styled-components'
import Anouncement from '../components/Anouncement'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import {mobile} from '../responsive';

const Container=styled.div``
const Title=styled.h1`
    margin:20px;
    `
const FilterContainer=styled.div`
    display:flex;
    justify-content:space-between;
    `
const Filter=styled.div`
   margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}

`
const FilterText=styled.span`
      font-size:20px;
      font-weight:600px;
      margin-right:20px;
      ${mobile({ marginRight: "0", fontSize:"18px" })}

`

const Select=styled.select`
    padding:10px;
    margin-left:20px;
    ${mobile({ margin: "10px 0" ,})}

`
const Option=styled.option``

const ProductsPage = () => {
  return (
    <Container>
        <Navbar/>
        <Anouncement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Products:
                    <Select >
                        <Option disabled>Select Color</Option>
                        <Option>red</Option>
                        <Option>white</Option>
                        <Option>blue</Option>
                        <Option>green</Option>
                    </Select>
                    
                    <Select >
                        <Option disabled>Select Size</Option>
                        <Option>S</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                    
                </FilterText>
            </Filter>
            <Filter>
                <FilterText>
                    Sort Products:
                    <Select >
                        <Option disabled>Price(Asc)</Option>
                        <Option>Asc</Option>
                        <Option>Desc</Option>
                    </Select>
                </FilterText>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductsPage