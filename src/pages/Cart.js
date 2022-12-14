import { Add, Remove } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';
import Catalogue from '../components/Catalogue';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {mobile} from "../responsive";
import Promotion from '../components/Promotion';

const Container = styled.div`
   
`


const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
  font-weight: 200;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;


const MainText  = styled.div`
  ${mobile({ display: "none" })}

`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  
`

const ProductDetails = styled.div`
flex: 2;
display: flex;
  
`
const Image = styled.img`
    width: 200px;
  display: flex;
  justify-content: space-between;
  
`
const Details = styled.div`
padding: 30px;
display: flex;
flex-direction: column;
justify-content: space-around;
  
`
const ProductName = styled.span`
  
`
const ProductID = styled.span`
  
`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
`
const ProductSize = styled.span`
  
`

const PriceDetails = styled.div`
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
`
const ProductAmount = styled.div`
font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({ marginBottom: "20px" })}
`

const Hr = styled.hr`
background-color: #eee;
border:  none;
height: 2px;
`


const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
  
`
const SummaryTitle = styled.div`
font-weight: 200;
    
  
`
const SummaryItem = styled.div`
margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
    
  
`
const SummaryItemText = styled.div`
    
  
`
const SummaryItemPrice = styled.div`
    
  
`
const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`


const Cart = () => {
  return (
    <Container>
    <Promotion />
      <Navbar />
      
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
            <TopButton>Continue Shopping</TopButton>
            <MainText>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </MainText>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetails>
                    <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                    <Details>
                        <ProductName><b>Product:</b>T Shirt Product</ProductName>
                        <ProductID><b>ID:</b>696996969696969</ProductID>
                        <ProductColor color='gray'/>
                        <ProductSize><b>ID:</b>42</ProductSize>
                    </Details>
                    
                    </ProductDetails>
                    <PriceDetails>
                       <ProductAmountContainer>
                        <Add />
                        <ProductAmount></ProductAmount>
                        <Remove />
                       </ProductAmountContainer>
                       <ProductPrice>$ 44</ProductPrice>
                    </PriceDetails>
                </Product>
                <Hr />
                <Product>
                    <ProductDetails>
                    <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                    <Details>
                        <ProductName><b>Product:</b>T Shirt Product</ProductName>
                        <ProductID><b>ID:</b>696996969696969</ProductID>
                        <ProductColor color='black'/>
                        <ProductSize><b>ID:</b>42</ProductSize>
                    </Details>
                    
                    </ProductDetails>
                    <PriceDetails>
                       <ProductAmountContainer>
                        <Add />
                        <ProductAmount></ProductAmount>
                        <Remove />
                       </ProductAmountContainer>
                       <ProductPrice>$ 44</ProductPrice>
                    </PriceDetails>
                </Product>
                
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 88</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 4.20</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ 4.20</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>$ 88</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Catalogue />
      <Footer />
    </Container>
  )
}

export default Cart;