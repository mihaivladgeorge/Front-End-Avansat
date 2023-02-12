import React from 'react'
import styled from 'styled-components'
import axios from "axios"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.34)
      ),
      url("https://images.unsplash.com/photo-1515281239448-2abe329fe5e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG95JTIwc3RvcmV8ZW58MHx8MHx8&w=1000&q=80")
        center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #F2CD5C;
  border-radius: 25px 25px;
  box-shadow: 2px 2px;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 400;
  color: #400E32;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px;
  padding: 15px;
  font-size: 20px;
  border-radius: 15px 15px;
`;

const Agreement = styled.span`

`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 20px;
  margin-top: 10px;
  border-radius: 15px 15px;
  background-color: #A61F69;
`;

  const Register = () => {

    let uname = "";
    let mail = "";
    let pass = "";

    const handleClick = (e) => {
      // e.preventDefault();
      axios.post("http://localhost:5000/api/auth/register", {
        username: uname,
        email: mail,
        password: pass
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    };

  return (
    <Container>
        <Wrapper>
            <Title>Creează un cont</Title>
            <Form>
                <Input placeholder="Nume de utilizator"
                  onChange={(e) => uname=e}/>
                <Input placeholder="Email"
                  onChange={(e) => mail=e}/>
                <Input placeholder="Parolă"
                  onChange={(e) => pass=e}/>
                <Agreement>
                    Prin crearea acestui cont accept prelucrarea datelor mele personale.
                </Agreement>
                <Button onClick={handleClick}>Creează</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register