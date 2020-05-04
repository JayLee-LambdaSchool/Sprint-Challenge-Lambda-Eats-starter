import React from 'react';
import styled from 'styled-components';

import Banner from './Banner';
import Specials from './Specials';

import PizzaList from './PizzaList';

const PageStyled = styled.div`
  width: 1200px;
  max-width: 80%;

  background: #D72638;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
`;

export default function HomePage(props) {
  const {pizzas} = props;

  return (
    <PageStyled>
      <Banner/>

      <Specials/>

      <PizzaList
        pizzas = {pizzas}
      />
    </PageStyled>
  )
}