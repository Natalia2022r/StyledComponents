import styled from "styled-components";
import { Link } from "react-router-dom";

export const Text = styled.p`
  color: #1c286d;
`;

export const SecondText = styled.p`
  color: black;
`;

export const Span = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const Body = styled.div`
  background-color: #6272d2;
  height: 700px;
  width: 500px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  width: 420px;
`;

export const Header = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;
export const IconContainer = styled.div`
  background-color: #c57d89;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  padding: 10px;
`;
export const Icon = styled.img`
  height: 100%;
  width: 100%;
`;
export const H2 = styled.h2``;

export const Main = styled.div`
  margin-bottom: 45px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  input {
    flex: 0 0 auto;
  }
`;
export const Input = styled.input`
  background-color: #6f1ceb;
  border: 1px solid #9ddbd8;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px;
  color: white;
`;
export const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const Checkbox = styled.input`
  margin-right: 10px;
  height: 15px;
  width: 15px;
`;
export const Button = styled.button`
  background-color: #0c8d86;
  color: #fff;
  padding: 10px 0px;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 15px;
  transition: all 0.2s;
  &:hover {
    background-color: rgb(10, 20, 40);
  }
`;

export const AContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
export const LinkTo = styled(Link)`
  color: #1c286d;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;

export const Footer = styled.footer``;
