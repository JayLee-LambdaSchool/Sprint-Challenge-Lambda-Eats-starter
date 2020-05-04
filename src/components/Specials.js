import React from 'react';
import PizzaList from './PizzaList';

const currSpecials = [
  {
    id: 1,
    name: 'Margherita Pizza',
    size: 'large',
    sauce: 'marinara',
    special: 'add tomato and basil',
    toppings: []
  },

  {
    id: 2,
    name: 'BBQ Bacon Pizza',
    size: 'small',
    sauce: 'bbq',
    special: 'add chicken',
    toppings: ['isg', 'bcn']
  },

  {
    id: 3,
    name: 'House Speciality',
    size: 'large',
    sauce: 'garlic',
    special: '',
    toppings: ['isg', 'bac', 'olv']
  }
]

export default function Specials(props) {
  return (
    <PizzaList
      pizzas = {currSpecials}
    />
  )
}