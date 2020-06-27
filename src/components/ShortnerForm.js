import React, { useState, useContext } from 'react';
import { DispatchContext } from '../contexts/app.context';
import { CREATE_URL_ITEM, SET_CURRENT_URL } from '../constants/actions';
import styled from 'styled-components';

const Form = styled.form`
  height: 15%;
  width: 90%;
  background-color:  #034f84; 
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Input = styled.input`
  height: 2rem;
  width: 100%;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  border: none;
  display: flex;
  flex-direction: column;
  caret-color: #f7786b;
  &::placeholder{
      color:  #92a8d1;
  }
`;

const Button = styled.button`
  height: 2.5rem;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color:  #f7786b;
  color:  #f0f0f0;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease; 
  &:hover{
      background-color:  #f0f0f0;
      color: #f7786b;
  }
`;

export default function ShortnerForm(props) {
    const dispatch = useContext(DispatchContext);
    const [urlValue, setUrlValue] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('http://localhost:3001/api/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({url: urlValue})
        });
      const result = await response.json();
      if (result.success) {
        dispatch({
          type: CREATE_URL_ITEM,
          payload: result.data,
        });
        setUrlValue('');
      }
    }

    const handleChange = async (e) => {
      setUrlValue(e.target.value);
    }

    return (
        <Form onSubmit={handleSubmit}>
        <Input type='text' onChange={handleChange} placeholder='https://example.com' />
            <Button type='submit'>SHORTEN MY URL</Button>
        </Form>
    );
}

