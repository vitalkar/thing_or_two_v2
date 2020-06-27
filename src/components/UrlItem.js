import React from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const ListItem = styled.li`
  height: 3rem;
  width: 100%;;
  display: flex;
  border-bottom: 1px solid #f0f0f0;
  color: #f0f0f0;
  transition: all 0.2s ease; 
  &:hover {
      background-color: #f7cac9;
      color: #034f84;
        border-bottom: 1px solid #f7cac9;
  }
`;

const ListItemData = styled.div`
  height: 100%;
  width: 50%;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  overflow-wrap: break-word;
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

const CopyButton = styled.div`
    float: right;
    height: 1.3rem;
    width: 1.3rem;
    margin: 0 0.5rem;
    cursor: pointer;
    background: url('images/content_copy.svg') center / contain no-repeat;
`;

export default function UrlItem(props) {
    const {url, shortUrl} = props.data;
    return (
        <ListItem>
            <ListItemData>{url}</ListItemData>
            <ListItemData>
                <Link href={shortUrl} target="_blank">{shortUrl}</Link>
                <CopyToClipboard text={shortUrl}>
                    <CopyButton />
                </CopyToClipboard>
            </ListItemData>
        </ListItem>
    );
}
