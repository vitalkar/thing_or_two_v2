import React, { useContext, useEffect } from 'react';
import { AppContext, DispatchContext } from '../contexts/app.context';
import { SET_URL_ITEMS } from '../constants/actions';
import styled from 'styled-components';
import UrlItem from './UrlItem';

const Container = styled.div`
  height: 90%;
  width: 90%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #92a8d1;
  box-shadow: 0px 8px 15px #909090;
`;

const ListHeader = styled.div`
  height: 7%;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 5px 5px 0 0;
  background-color: #f7786b;
`;

const ListHeaderItem = styled.div`
  height: 100%;
  width: 50%;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #f0f0f0;
  letter-spacing: 0.1rem;
`;

const List = styled.ul`
  height: 93%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 1rem;
  }
  &::-webkit-scrollbar-track {
    background: #f0f0f0;
  }
  &::-webkit-scrollbar-thumb {
    background: #f7786b88;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #f7786b;
  }
`;

export default function UrlList(props) {
    const { items } = useContext(AppContext);
    const dispatch = useContext(DispatchContext);
    const fetchUrlItems = async () => {
      const response = await fetch('http://localhost:3001/api/readAll');
      const result = await response.json();
      dispatch({type: SET_URL_ITEMS, payload: result});
    }

    useEffect(() => {
      fetchUrlItems();
    }, []);
    
    return (
        <Container>
            <ListHeader>
                <ListHeaderItem>URL</ListHeaderItem>
                <ListHeaderItem>SHORT URL</ListHeaderItem>
            </ListHeader>
            <List>
                {items.map((item, index) => <UrlItem key={index} data={item} />)}
            </List>
        </Container>
    );
}
