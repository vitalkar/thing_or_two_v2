import React, { useState } from 'react';
import styled from 'styled-components';
import UrlList from './UrlList';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Main() {
    return (
        <Container>
            <UrlList />
        </Container>
    );
}

