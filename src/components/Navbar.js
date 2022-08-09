import React from 'react'
import styled from 'styled-components'
import IconButton from '@mui/material/IconButton';
import { Badge} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCart';
import {mobile} from "../responsive";
import { MiscellaneousServicesOutlined } from '@mui/icons-material';


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  
`


const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
    
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
    
`

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
    
`
const Center = styled.div`
    flex: 1;
    text-align: center;

`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "20px" })}
    
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
    

`
const NavItem = styled.div`
    font-size = 14px;
    cursor = pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
   

`

const Navbar = () => {
    return (
      <Container>
        <Wrapper>
          <Left>
          <Language>EN</Language>
          <IconButton>
                    <MenuIcon />
            </IconButton>
          </Left>
          <Center>
            <Logo>T-Shirt Store</Logo>
          </Center>
          <Right>
            <NavItem>SIGN UP</NavItem>
            <NavItem>SIGN IN</NavItem>
            <NavItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </NavItem>
          </Right>
        </Wrapper>
      </Container>
    );
  };

export default Navbar;




