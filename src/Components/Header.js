import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  & li:hover {
    color: palevioletred;
  }
`;

export default () => (
  <header>
    <List>
      <li>
        <a href="/">Movies</a>
      </li>
      <li>
        <a href="/tv">TV</a>
      </li>
      <li>
        <a href="/search">Search</a>
      </li>
    </List>
  </header>
);
