import React, {useState, useEffect} from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import {v4 as uuid} from 'uuid';
import * as yup from 'yup';

import axios from 'axios';
import styled from 'styled-components';

import Form from './components/Form';
import HomePage from './components/HomePage';

import Header from './components/Header';

const AppStyled = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;

  align-items: center;
`;

const url = 'https://reqres.in/api/users';

const initialFormValues = {
  name: '',
  size: '',

  sauce: '',
  special: '',

  toppings: {
    pep: false,
    isg: false,

    bac: false,
    olv: false,

    msh: false,
    bpr: false
  }
};

const initialPizzas = [
  {
    id: uuid(),
    name: 'Pepperoni',
    size: 'large',
    sauce: 'marinara',
    special: 'extra pepperoni',
    toppings: ['pep']
  }
];

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name requires 2 characters')
    .required('Name is required'),
  
  size: yup.string(),
  sauce: yup.string(),
  special: yup.string()
});

export default function App(props) {
  const [pizzas, setPizzas] = useState(initialPizzas);

  const [formValues, setFormValues] = useState(initialFormValues);

  const inputHandler = (event) => {
    const {name, value} = event.target;

    yup
      .reach(formSchema, name)
      .validate(value)

      .then((valid) => {})
      .catch((err) => {
        console.log(`Error: ${err.errors[0]}`);
      });
    
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const checkBoxHandler = (event) => {
    const {name, checked} = event.target;

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked
      }
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const currValues = formValues;

    setFormValues(initialFormValues);

    axios
      .post(url, currValues)

      .then((res) => {
        const {
          id, name, size,
          sauce, special, toppings
        } = res.data;

        setPizzas([
          ...pizzas,
          {
            id: id,
            name: name,

            size: size,
            sauce: sauce,
            
            special: special,
            toppings: Object.keys(toppings).filter((x) => toppings[x] === true)
          }
        ]);
      })

      .catch((err) => {
        debugger;
      });
  };

  return (
    <AppStyled>
      <Header/>

      <Switch>
        <Route path = '/pizza'>
          <Form
            formValues = {formValues}
            inputHandler = {inputHandler}

            checkBoxHandler = {checkBoxHandler}
            submitHandler = {submitHandler}
          />
        </Route>

        <Route path = '/'>
          <HomePage
            pizzas = {pizzas}
          />
        </Route>
      </Switch>
    </AppStyled>
  )
}