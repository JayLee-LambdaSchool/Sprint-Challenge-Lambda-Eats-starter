import React from 'react';
import styled from 'styled-components';

import PizzaCard from './PizzaCard';

const ListStyled = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-flow: row wrap;

  align-content: flex-start;
`;

export default function PizzaList(props) {
  const {pizzas} = props;

  return (
    <ListStyled>
      {pizzas.map(pizza => {
        return <PizzaCard
                  key = {pizza.id}
                  pizza = {pizza}
        />
      })}
    </ListStyled>
  )
}