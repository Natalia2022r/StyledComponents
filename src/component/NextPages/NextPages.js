import React, { useState } from "react";
import validetion from "../Validation/validetion";
import {     Body,
    Span,
    InputContainer,
    Checkbox,
    Container,
    Footer,
    H2,
    Header,
    Icon,
    Button,
    Input,
    Main,
    SecondText,
    Text,
    IconContainer,
    Form,
    CheckboxDiv,
    AContainer,
    LinkTo,} from "../../style";


    const photo = new URL ("../Icon/padlock.png", import.meta.url);
function NextPages() {

        const [values, setValues] = useState({
            firstName: "",
            lastName: "",
            email: "",
            password: ""

        });
        const [errors, setErrors] = useState();

        const handleChahge = (e) =>{
            setValues({
                ...values,
                [e.target.name]: e.target.value,
            })
        }
    
        const submitHandler = (e) => {
            e.preventDefault();
            setErrors(validetion(values));
            const userData = {
                email: values,
                password: values,
                firstName: values,
                lastName: values,
                autoLogin: false,
            };
            localStorage.setItem("user", JSON.stringify(userData));
         
        };
        return (
            <Span>
            <Body className="Body">
                <Container>
                    <Header>
                        <IconContainer>
                            <Icon src={photo} />
                        </IconContainer>
                        <H2>Sign Up</H2>
                    </Header>
                    <Main>
                        <Form>
                            <InputContainer>
                                <Input
                                name="firstName"
                                    type="text"
                                    value={values.firstName}
                                    onChange={handleChahge}
                                    placeholder="First Name"></Input>
                                <Input
                                name="lastName"
                                    type="text"
                                    value={values.lastName}
                                    onChange={handleChahge}
                                    placeholder="Last Name"></Input>
                            </InputContainer>
                            <Input
name="email"
 type="email" 
 placeholder="Email Adress *" 
 value={values.email} 
 onChange = {handleChahge}/>
       <div>
        {errors?.email && <div style={{height: 40}}>{errors.email}</div>}
        </div>
        <Input  
name="password" 
type="password" 
placeholder="Password *" 
value={values.password} 
onChange = {handleChahge}
/>
<div>
{errors?.password && <div style={{height: 40}}>{errors.password}</div>}
</div>
                            <CheckboxDiv>
                                <Checkbox type="checkbox"></Checkbox>
                                <Text>I want to recive inspiration, marketing promotions and updates via email</Text>
                            </CheckboxDiv>
                            <Button onClick={submitHandler}>
                                SIGN UP
                            </Button>
                            <AContainer>
                                <LinkTo to="/">Already have an account? Sign in</LinkTo>
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
    };
    
    export default NextPages;