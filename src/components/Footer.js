import { 
    Facebook, Instagram, Pinterest, 
    MailOutline, Phone, Room,  
} from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive";


const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h2`
    
`
const Desc = styled.p`
    margin: 20px 0px;

`
const SocialContainer = styled.div`
    display: flex;
    
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props =>props.color};
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-right: 20px
    
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`

const Title = styled.h3`
    margin-bottom: 30px;

`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    
    
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#e8eaf6" })}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items:  center;
    
`
const Payment = styled.img`
    width: 50%;
`;



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>T-Shirt Shop</Logo>
            <Desc>You can follow us here...</Desc>
            <SocialContainer>
                <SocialIcon color='3B4999'>
                    <Facebook />
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram />
                </SocialIcon>
                

                <SocialIcon color='3B4999'>
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Shopping Links </Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Women's Clothing</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Men's Clothing</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Children's Clothing</ListItem>
                <ListItem>Terms</ListItem>
            </List>

        </Center>
        <Right>
            <Title>Contact Information </Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>Maple Street, Maple City</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>Miki@gmail.com</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+1 000-000-000</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
        
        
        </Container>
  )
}

export default Footer;



