import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 50px;
  height: 50px;
  text-align: center;
  &:not(:last-child) {
    margin-right: 10px;
  }
  border-bottom: 5px solid ${props => (props.current ? '#ff9f43' : 'transparent')};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// withRouter데코레이터로 꾸며줬기 때문에 라우터 위치를 알고있다!!
// Router.js에서처럼 <Route path="/" exact component={Home} /> Route로 만든 것들은 디폴트로 history, match, location이 component에 props로 같이 전해짐!
export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === '/'}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === '/tv'}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === '/search'}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
