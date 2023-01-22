import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import {mobile} from '../responsive';

const Container=styled.div`
    display:flex;
    ${mobile({ flexDirection: "Column"})}
  
`
const Left=styled.div`
        flex:1;  
        flex-direction:column;
        padding:20px; 
`

const Logo= styled.h1`
    
`
const Desc= styled.p`
    margin:20px 0;

`
const Socidesc= styled.div`
    display: flex;    
`
const SocialIcon =styled.div`
    width:40px;
    display: flex;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${props=>props.color};
    align-items:center;
    justify-content:center;
    margin-right:8px;
`
const Center=styled.div`
        flex:1; 
        padding:20px;  
        ${mobile({ display: "none"})}
 
`

const Title=styled.h3`
    margin-bottom :30px;`

const List=styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    flex-wrap:wrap;
    display:flex;
`

const ListItem=styled.li`
    width:50%;
    margin-bottom:5px;`

const Right=styled.div`
        flex:1;   
        ${mobile({ paddingTop:"10px",  backgroundColor:"lightgrey",})} 
`

const ContactItem=styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`

const Payment=styled.img``

export const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Vans.</Logo>
            <Desc>dnfrkwfuj rfkjrnbefiorwef rwjfnrwieofjwrefrwjfnrwiofjrwe frweuofhrwi9ofjwr fwiofhrw9ojfrew wreuiofh9rewof rwe fourwhfwre feworifhewoir frewouifhrwef </Desc>
            <Socidesc>
                <SocialIcon color="3B5999">
                    <FacebookIcon />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <PinterestIcon />
                </SocialIcon>
            </Socidesc>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men</ListItem>
                <ListItem>Women</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terma & conditions</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><LocationOnIcon style={{marginRight:"10px"}}/> abd, ave 1234, jamesbond road</ContactItem>
            <ContactItem><LocalPhoneIcon style={{marginRight:"10px"}}/> +91 987654321</ContactItem>
            <ContactItem><MailIcon style={{marginRight:"10px"}}/> enquiry@vans.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}
