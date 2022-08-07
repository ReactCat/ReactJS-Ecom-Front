import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #7986cb;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size = 14px;
    font-weight = 500;
    
`

const Announce = () => {
  return (
    <Container>
        Super Deal. Free Shipping on order over $50.00
    </Container>
  )
}

export default Announce;


