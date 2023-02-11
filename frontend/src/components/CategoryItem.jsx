import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 4px;
  position: relative;
  &:hover {
    transform: scale(1.05);
  };
  padding: 10px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid #400E32;
  border-radius: 15px 15px;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 5px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;

const Button = styled.button`
  border: none;
  padding: 8px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 1000;
  font-size: 20px;
  height: 5vh;
  &:hover {
      transform: scale(1.1);
      background-color: #F2CD5C;
  }
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Img src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Navighează aici!</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem;