
import React, { useContext } from 'react';
import { AppContext } from '../contexts/app.context';

import styled from 'styled-components';

const Container = styled.div`
  height: 30%;
  width: 90%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color:  #f7cac9; 
`;

const InfoChunk = styled.div`
  height: 50%;
  margin: 0.5rem;
  border-radius: 5px;
  background-color: #f0f0f0;
`;

const Title = styled.div`
  height: 3rem;
  width: 100;
  padding-left: 0.5rem;
  color: #034f84;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
`;

const Content = styled.div`
  width: 100%;
  height: 2rem;
  padding: 0 0.5rem;
  color: #f7786b;
  overflow-wrap: break-word;;
`;


const Link = styled.a`
    width: 100%;
    cursor: pointer;
    color: inherit;  
    text-decoration: none;
    &:visited {
        color: inherit;   
    }
`;

export default function ShortnerDisplay(props) {
    const {url, shortUrl} = useContext(AppContext);
    return (
        <Container>
        <InfoChunk>
          <Title>ORIGINAL URL:</Title>
          <Content>{url}</Content>
        </InfoChunk>
        <InfoChunk>
          <Title>URL SHORTENING:</Title>
          <Content>
            <Link href={shortUrl} target="_blank">{shortUrl}</Link>
          </Content>
        </InfoChunk>
        </Container>
    );
}


