import React from 'react';
import { AppProvider } from '../contexts/app.context';
import Sidebar from './Sidebar';
import Main from './Main';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f0f0f0;
  display: flex;
`;

export default function App() {
  return (
    <Container>
      <AppProvider>
        <Sidebar></Sidebar>
        <Main></Main>
      </AppProvider>
    </Container>
  );
}

