import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products'
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const Container = styled.div`

`;

const Title = styled.h1`
  margin: 20px;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title> {cat} </Title>
        <Products cat={cat}/>
        <Footer/>
    </Container>
  )
}

export default ProductList