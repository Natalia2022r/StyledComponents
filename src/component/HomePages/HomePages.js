import React, { useState, useEffect } from "react";
import validetion from "../Validation/validetion";
import {
  Body,
  Span,
  Button,
  Checkbox,
  Container,
  Footer,
  H2,
  Header,
  Icon,
  Input,
  Main,
  SecondText,
  Text,
  IconContainer,
  Form,
  CheckboxDiv,
  AContainer,
  LinkTo,
} from "../../style";

const photo = new URL("../Icon/padlock.png", import.meta.url);

function HomePages() {
  const [rememberMe, setRememberMe] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState();

  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (userData?.autoLogin) {
      setValues(userData.values);
      setRememberMe(true);
    }
  }, [userData?.autoLogin, userData.values]);
  const resetData = () => {
    localStorage.clear();
  };

  const handleChahge = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handelFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validetion(values));
    if (values === userData.values) {
      if (rememberMe) {
        userData.autoLogin = true;
        localStorage.setItem("user", JSON.stringify(userData));
      } else {
        userData.autoLogin = false;
        localStorage.setItem("user", JSON.stringify(userData));
      }
      alert("Ви авторизовані!");
    } else {
      alert("Такого користувача неіснує, створіть акаунт.");
    }
  };

  return (
    <Span>
      <Body className="Body">
        <Container>
          <Header>
            <IconContainer>
              <Icon src={photo} alt="1" />
            </IconContainer>
            <H2>Sign In</H2>
          </Header>
          <Main>
            <Form>
              <Input
                name="email"
                type="email"
                placeholder="Email Adress *"
                value={values.email}
                onChange={handleChahge}
              />
              <div>
                {errors?.email && (
                  <div style={{ height: 40 }}>{errors.email}</div>
                )}
              </div>
              <Input
                name="password"
                type="password"
                placeholder="Password *"
                value={values.password}
                onChange={handleChahge}
              />
              <div>
                {errors?.password && (
                  <div style={{ height: 40 }}>{errors.password}</div>
                )}
              </div>
              <CheckboxDiv>
                <Checkbox
                  onChange={() => setRememberMe(!rememberMe)}
                  checked={rememberMe}
                  type="checkbox"
                ></Checkbox>
                <Text>Remember me</Text>
              </CheckboxDiv>

              <Button onClick={handelFormSubmit}>SING IN</Button>

              <AContainer>
                <LinkTo onClick={resetData} to="/">
                  Forgot password?
                </LinkTo>
                <LinkTo to="/NextPages">Don't have an account? Sign Up</LinkTo>
              </AContainer>
            </Form>
          </Main>
          <Footer>
            <SecondText>Copyright © Your Website 2022.</SecondText>
          </Footer>
        </Container>
      </Body>
    </Span>
  );
}

export default HomePages;
