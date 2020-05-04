import React from 'react';
import {useRouteMatch} from 'react-router-dom';

import styled from 'styled-components';
import createPizza from '../Assets/Pizza.jpg';

const BannerStyled = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

export default function Banner(props) {
  const {path, url} = useRouteMatch();

  return (
    <BannerStyled>
      <img src = {createPizza} alt = "A hot, fresh, pizza"/>
    </BannerStyled>
  )
}