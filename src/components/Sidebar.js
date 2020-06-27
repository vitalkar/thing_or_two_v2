import React from 'react';
import styled from 'styled-components';
import ShortnerForm from './ShortnerForm';
import ShortnerDisplay from './ShortnerDisplay';

const Container = styled.div`
  height: 100%;
  width: 18rem;

  background-color:  #034f84; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f0f0f0;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
`;

const Icon = styled.div`
  height: 1.6rem;
  width: 1.6rem;
  margin: 0 0.5rem;
  background: url('images/${props => props.name}.svg') center / contain no-repeat;
`;

const Footer = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #f0f0f0;
  letter-spacing: 0.1rem;
`;

export default function Sidebar() {
    return (
    <Container> 
        <Title>
          <Icon name={'content_cut'} />
            SHORTEN URL
          <Icon name={'link'} />
        </Title>
            <ShortnerForm />
            <ShortnerDisplay />
            <Footer>THING OR 2 &copy;</Footer>
    </Container>
    );
}

