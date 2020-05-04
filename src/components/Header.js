import React from 'react';
import {NavLink} from 'react-router-dom';

import styled from 'styled-components';

const HeaderStyled = styled.div`
  width: 100%;
  height: 15vh;
  background: #000;
  
  color: $FFF;
  padding: 15px;
  display: flex;

  justify-content: center;

  div {
    width: 1200px;
    max-width: 80%;
    display: flex;

    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 2rem;
      line-height: 2rem;
    }

    nav {
      a {
        font-size: 1rem;
        line-height: 1rem;

        color: #FFF;
        &:hover {
          text-shadow: 0 0 5px red;
        }

        &.red {
          color: red;
        }

        padding: 15px;
        &:last-child {
          padding-right: 0;
        }
      }
    }
  }
`;

export default function Header(props) {
  return (
    <HeaderStyled>
      <div>
        <h1>Lambda Eats</h1>

        <nav>
          <NavLink
            exact
            to = '/'
            activeClassName = 'red'
            data-cy = 'home'
          >
            Home
          </NavLink>

          <NavLink
            to = '/pizza'
            activeClassName = 'red'
            data-cy = 'pizza'
          >
            New Pizza
          </NavLink>

          <NavLink
            to = '/help'
            activeClassName = 'red'
          >
            Help
          </NavLink>
        </nav>
      </div>
    </HeaderStyled>
  )
}