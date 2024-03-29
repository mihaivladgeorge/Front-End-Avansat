import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@mui/icons-material"
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 55px;
`

const Wrapper = styled.div`
  padding: 12px 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F2921D;
`

const Left = styled.div`
  flex: 1;
  display: flex;
`

const SearchContainer = styled.div`
  border: 0.5px solid #400E32;
  display: flex;
  margin-left: 20px;
`

const Input = styled.input`
  border: none;
`

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  color: #400E32;
`

const Center = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #400E32;
`

const MenuItem = styled.div`
  font-size: 20;
  cursor: pointer;
  margin-left: 10px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            <SearchContainer>
              <Input/>
              <Search/>
            </SearchContainer>
          </Left>
          <Center>
            <Link to="/" style={{ textDecoration: 'none' ,color: 'inherit' }} >
              <Logo>
                CARS4FUN
              </Logo>
            </Link>  
          </Center>
          <Right>
            <Link to="/register" style={{ textDecoration: 'none' ,color: 'inherit' }} >
              <MenuItem>Înregistrare</MenuItem>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none' ,color: 'inherit' }} >
              <MenuItem>Logare</MenuItem>
            </Link>
            <MenuItem>
              <Badge color="primary">
              <Link to="/cart" style={{ textDecoration: 'none' ,color: 'inherit' }} >
                  <ShoppingCartOutlined color="action" />
              </Link>
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar