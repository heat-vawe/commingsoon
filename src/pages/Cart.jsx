import styled from '@emotion/styled'
import Anouncement from '../components/Anouncement'
import Navbar from '../components/Navbar'
import {Footer} from '../components/Footer'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {mobile} from '../responsive';

const Container=styled.div`

`

const Wrapper=styled.div`
  padding: 20px;
  ${mobile({ padding:"9px" })}

`

const Title=styled.h1`
  font-weight:300;
  text-align:center;
`

const Top=styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 20px;
`;

const TopButton=styled.button`
  padding:10px;
  font-size:20px;
  border:${(props)=>props.type==="filled"&&"none"};
  Background-color:${(props)=>props.type==="filled"? "black": "transparent"};
  color:${(props)=>props.type==="filled"&&"white"};
  ${mobile({ margin:"9px" })}


`

const TopTexts=styled.div`
    ${mobile({ display:"none" })}
`;

const TopText=styled.span`
    text-decoration:underline;
    cursoror:pointer;
    margin:0px 10px;
`;

const Bottom=styled.div`
  display:flex;
  justify-content:space-between;
  ${mobile({ flexDirection:"column" })}

`

const Info=styled.div`
  flex:3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

 
`

const ProductDetail=styled.div`
  flex:2;
  display:flex;
`
const Image=styled.img`
    width:200px;
    
`
const Details=styled.div`
  display:flex;
  padding:20px;
  flex-direction:column;
  justify-content:space-around;
  

`

const ProductName=styled.span`
  
`
const ProductId=styled.span`
  
`

const ProductColor=styled.span`
  width:20px;
  height:20px;
  border-radius:50%; 
  Background-color:${(props)=>props.color} 
`

const ProductSize=styled.span`
  
`
const ProductPriceDetail=styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}

`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}

`;

const HR=styled.hr`
  background-color:#eee;
  border:none;
  height:1px;

`

const Summary=styled.div`
  flex:1;
  border:0.5px solid lightgrey;
  border-radius:10px;
  padding:20px;
  height:50vh;
`

const SummryTitle=styled.h1`
  font-weight:200;
`
const SummryItem=styled.div`
  margin:30px 0;
  display:flex;
  justify-content:space-between;
  font-weight:${(props)=>props.Type==="total"&&"900"};
  font-size:${(props)=>props.Type==="total"&&"24px"};
`
const SummryItemtext=styled.span`

`

const SummryItemPrice=styled.span``
const Button=styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    font-weight:500px;
`

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Anouncement/>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
              <TopButton>CONTINUE SHOPPING</TopButton>
              <TopTexts>
                <TopText>SHOPPING BAG(2)</TopText>
                <TopText> YOUR WISHLIST!!</TopText>
              </TopTexts>
              <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
              <Info>
                    <Product>
                      <ProductDetail>
                      <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                        <Details>
                            <ProductName><b>Product</b> jesse thunder shoes</ProductName>
                            <ProductId><b>ID:</b>93813718293</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size:</b>37.5</ProductSize>
                        </Details>
                      </ProductDetail> 
                      <ProductPriceDetail>
                          <ProductAmountContainer>
                            <AddIcon/>
                            <ProductAmount>2</ProductAmount>
                            <RemoveIcon/>
                          </ProductAmountContainer>
                          <ProductPrice>$20</ProductPrice>
                      </ProductPriceDetail>
                    </Product> 
                    <HR/>
                    <Product>
                      <ProductDetail>
                      <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                        <Details>
                            <ProductName><b>Product</b> jesse thunder shoes</ProductName>
                            <ProductId><b>ID:</b>93813718293</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size:</b>37.5</ProductSize>
                        </Details>
                      </ProductDetail> 
                      <ProductPriceDetail>
                          <ProductAmountContainer>
                            <AddIcon/>
                            <ProductAmount>2</ProductAmount>
                            <RemoveIcon/>
                          </ProductAmountContainer>
                          <ProductPrice>$20</ProductPrice>
                      </ProductPriceDetail>
                    </Product> 
              </Info>
              <Summary>
                <SummryTitle>Order Summary</SummryTitle>
                <SummryItem>
                  <SummryItemtext>subtotal</SummryItemtext>
                  <SummryItemPrice>$80</SummryItemPrice>
                </SummryItem>
                <SummryItem>
                  <SummryItemtext>Estimated Shipping</SummryItemtext>
                  <SummryItemPrice>$5</SummryItemPrice>
                </SummryItem>
                <SummryItem>
                  <SummryItemtext>Shipping Discount</SummryItemtext>
                  <SummryItemPrice>$-5</SummryItemPrice>
                </SummryItem>
                <SummryItem Type="total">
                  <SummryItemtext >Total</SummryItemtext>
                  <SummryItemPrice >$80</SummryItemPrice>
                </SummryItem>
                <Button>CHECKOUT NOW</Button>
              </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart