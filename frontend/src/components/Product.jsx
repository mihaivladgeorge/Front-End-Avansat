import React from 'react'
import {
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  border-radius: 25px 25px;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 380px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F2CD5C;
  position: relative;
  &:hover ${Info}{
      opacity: 1
  }
  border-radius: 25px 25px;
`;

const Img = styled.img`
  height: 70%;
  z-index: 2;
  border-radius: 25px 25px;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: white;
  transition: all 0.5s ease;
  &:hover{
      background-color: lightgrey;
      transform: scale(1.5);
  }
`;


const Product = ({item}) => {
  return (
    <Container>
        <Img src={item.image}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product