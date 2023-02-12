import React from 'react'
import {
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { publicRequest } from "../requestMethods";
import { Add, Remove } from '@mui/icons-material';

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

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  background-color: white;
  margin: 10px;
  border-radius: 50%;
  height: 50px;
  font-size: 20px;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;


const Product = ({item}) => {

  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/cars/get/" + item._id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [item._id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity })
    );
  };

  return (
    <Container>
        <Img src={item.image}/>
        <Info>
            <Icon onClick={handleClick}>
                <ShoppingCartOutlined/>
            </Icon>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
        </Info>
    </Container>
  )
}

export default Product