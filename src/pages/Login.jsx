import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import '../styles/login.css'

// Importing image assets
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { BASE_URL } from '../utils/config'

// Defining Login component
const Login = () => {
  // Defining state for user credentials
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  });
// Function to handle change in form input fields
  const handleChange =e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };
// Function to handle click event
  const handleClick = async e=> 
  {e.preventDefault()
    const res=await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
  headers:{
      'content-type': "application/json",
  },
  body: JSON.stringify(credentials),
})
  if (res.ok){
      console.log(credentials);
      
  } else {
      console.log(res.body)
  }
  
  }
// Rendering Login component
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="usericon" />
                </div>
                  <h2>Login</h2>
                  {/* =================Login form =========================*/}
                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                    </FormGroup>
                    <Button className="btn secondary__btn auth__btn" type="submit">
                      Login
                    </Button>
                  </Form>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login
