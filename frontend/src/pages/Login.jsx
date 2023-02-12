import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.34)
    ),
    url("https://images.unsplash.com/photo-1515281239448-2abe329fe5e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG95JTIwc3RvcmV8ZW58MHx8MHx8&w=1000&q=80")
      center;
  background-size: cover;
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
  font-size: 24px;
  font-weight: 400;
  color: #400E32;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #A61F69;
  color: white;
  cursor: pointer;
  border-radius: 25px 25px;
  margin-bottom: 10px;
  &:disabled {
    color: #400E32;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: #A61F69;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="nume de utilizator"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="parola"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>Nu iti amintesti parola?</Link>
          <Link>Creeaza un cont nou</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;