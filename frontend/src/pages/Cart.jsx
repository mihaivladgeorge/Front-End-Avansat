import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeProduct ,reduceQuantity,addQuantity} from "../redux/cartRedux";

const Container = styled.div`
  
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 300;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 20px 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  font-size: 20px;
`;

const ProductId = styled.span`
  font-size: 20px;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductPrice = styled.div`
  font-size: 40px;
  font-weight: 250;
`;

const Hr = styled.hr`
  background-color: #dcf0f7;
  height: 1px;
  border: none;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #dcf0f7;
  border-radius: 10px 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const SummaryItemText = styled.span`
  font-size: 20px;
`;

const SummaryItemPrice = styled.span`
  
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const handleRemove = () => {
    dispatch(removeProduct({ product, quantity }));
  };

  const handleReduceQuantity = () => {
    dispatch(reduceQuantity({product, quantity}));
  }
  const handleAddQuantity = () => {
    dispatch(addQuantity({product, quantity}));
  }

  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <Title>
                Coșul dumneavoastră de cumpărături
            </Title>
            <Top>
                <TopButton>Continuați cumpărăturile</TopButton>
                <TopTexts>
                    <TopText>Coșul de cumpărături({cart.products.length})</TopText>
                </TopTexts>
                <TopButton type="filled">Spre casă</TopButton>
            </Top>
            <Bottom>
            <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.image} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.name}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add onClick={handleAddQuantity} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove onClick={handleReduceQuantity}/>
                  </ProductAmountContainer>
                  <p onClick={handleRemove}>Sterge</p>
                  <ProductPrice>
                     {product.price * product.quantity} lei
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
                <Summary>
                    <SummaryTitle>Totalul</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>{cart.total} Lei</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Transport estimat</SummaryItemText>
                        <SummaryItemPrice>20 lei</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Reducere transport</SummaryItemText>
                        <SummaryItemPrice>-20 lei</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>{cart.total} lei</SummaryItemPrice>
                    </SummaryItem>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container> 
  )
}

export default Cart