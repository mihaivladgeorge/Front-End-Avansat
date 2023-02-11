import { FacebookTwoTone, Instagram, AssistantDirection, Phone, Mail } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; 
  padding: 15px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Description = styled.p`
  margin-top: 15px;
  margin-bottom: 10;
`;

const MediaDiv = styled.div`
  display: flex;
`;

const MediaIcon = styled.div`
  margin-top: 20px;
  margin-right: 10px;
  width: 65px;
  height: 40px;
  border-radius: 50px;
`;

const Logo = styled.h1`
`;

const Title = styled.h2`
  margin-bottom: 35px;
`;

const List = styled.ul`
  flex-wrap: wrap;
  display: flex;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li` 
  margin-bottom: 15px;  
  width: 50%;
  font-size: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    font-size: 20px;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
        <Title>Link-uri utile</Title>
            <List>
                <ListItem>Acasă</ListItem>
                <ListItem>Coș de cumpărături</ListItem>
                <ListItem>Mașini RC</ListItem>
                <ListItem>Mașini pentru copii</ListItem>
                <ListItem>Machete</ListItem>
                <ListItem>Contul meu</ListItem>
            </List>
        </Left>
        <Center>
            <Logo>CARS4FUN</Logo>
            <Description>
                CARS4FUN este un website dedicat pasionaților de mașini
                de toate vârstele! Oferim o gamă variata de produse, de la
                mașinuțe pentru copii mici până la mașini cu telecomandă
                pentru adolescenți și adulți!
            </Description>
            <MediaDiv>
                <MediaIcon>
                    <FacebookTwoTone/>
                </MediaIcon>
                <MediaIcon>
                    <Instagram/>
                </MediaIcon>
            </MediaDiv>
        </Center>
        <Right>
            <Title>
                Contact
            </Title>
            <ContactItem>
                <AssistantDirection style={{marginRight:'10px'}}/> București
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:'10px'}}/> 0777777777
            </ContactItem>
            <ContactItem>
                <Mail style={{marginRight:'10px'}}/> contact@carsforfun.ro
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer;