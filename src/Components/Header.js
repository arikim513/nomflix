import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header``;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  & li:hover {
    color: palevioletred;
  }
`;

const Item = styled.li``;
const SLink = styled(Link)``;

export default () => (
  <Header>
    <List>
      <Item>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);
