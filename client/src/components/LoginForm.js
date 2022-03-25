// see SignupForm.js for comments
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
  import { Form, Button, Alert } from 'react-bootstrap';
import Auth from '../utils/auth';

const LoginForm = (props) => {

  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
  
    try {
      const { data } = await login({
        variables: { ...userFormData}
      });
  
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };
  

  return (
   <div>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
        </Form.Group>
        <Button
          type='submit'
          variant='success'>
          Submit
        </Button>
  
      </Form>
      {error && <div>Login failed</div>}
      </div>
  );
};

export default LoginForm;
