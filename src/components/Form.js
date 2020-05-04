import React from 'react';
import styled from 'styled-components';

import Banner from './Banner';

const FormStyled = styled.div`
  width: 1200px;
  max-width: 80%;
  
  background: #6A61FF;
  height: 100%;
  
  display: flex;
  flex-flow: column nowrap;

  h2 {
    font-size: 2rem;
    text-align: center;
    padding: 15px 0 0;
  }

  form {
    padding: 20px;
    display: flex;
    flex-flow: column nowrap;
  }
`;

export default function Form(props) {
  const {
    inputHandler, checkBoxHandler, submitHandler
  } = props;

  const {
    name, size,
    sauce, special
  } = props.formValues;

  const {
    pep, isg, bac,
    olv, msh, bpr
  } = props.formValues.toppings;

  return (
    <FormStyled>
      <Banner/>

      <h2>Create Your Own Pizza</h2>

      <form>
        <label>
          <h3>Choice of Size</h3>
          <h4>Required</h4>

          <select
            name = 'size'
            data-cy = 'size'
            value = {size}
            onChange = {inputHandler}
          >
            <option defaultValue = ''>Please select. . .</option>
            <option value = 'small'>Small</option>
            <option value = 'medium'>Medium</option>
            <option value = 'large'>Large</option>
          </select>
        </label>

        <label>
          <h3>Choice of Sauce</h3>
          <h4>Required</h4>

          <select
            name = 'sauce'
            data-cy = 'sauce'
            value = {sauce}
            onChange = {inputHandler}
          >
            <option defaultValue = ''>Please select. . .</option>
            <option value = 'marinara'>Marinara</option>
            <option value = 'garlic'>Garlic</option>
            <option value = 'bbq'>BBQ Sauce</option>
            <option value = 'alfredo'>Spinach Alfredo</option>
          </select>
        </label>

        <div>
          <h3>Add Toppings</h3>
          <h4>Choose up to 3</h4>

          <label>
            <input
              type = 'checkbox'
              name = 'pep'
              data-cy = 'pep'
              checked = {pep}
              onChange = {checkBoxHandler}
            />
            <h5>Pepperoni</h5>
          </label>

          <label>
            <input
              type = 'checkbox'
              name = 'isg'
              data-cy = 'isg'
              checked = {isg}
              onChange = {checkBoxHandler}
            />
            <h5>Italian Sausage</h5>
          </label>

          <label>
            <input
              type = 'checkbox'
              name = 'bac'
              data-cy = 'bac'
              checked = {bac}
              onChange = {checkBoxHandler}
            />
            <h5>Bacon</h5>
          </label>

          <label>
            <input
              type = 'checkbox'
              name = 'olv'
              data-cy = 'olv'
              checked = {olv}
              onChange = {checkBoxHandler}
            />
            <h5>Olives</h5>
          </label>

          <label>
            <input
              type = 'checkbox'
              name = 'msh'
              data-cy = 'msh'
              checked = {msh}
              onChange = {checkBoxHandler}
            />
            <h5>Mushrooms</h5>
          </label>

          <label>
            <input
              type = 'checkbox'
              name = 'bpr'
              data-cy = 'bpr'
              checked = {bpr}
              onChange = {checkBoxHandler}
            />
            <h5>Bell Peppers</h5>
          </label>
        </div>

        <label>
          <h3>select a name for your creation!!</h3>
          <input
            type = 'text'
            name = 'name'
            data-cy = 'name'
            value = {name}
            onChange = {inputHandler}
          />
        </label>

        <label>
          <h3>Please list any special instructions here.</h3>
          <h4>Dietary restrictions and allergies go here</h4>

          <input
            type = 'text'
            name = 'special'
            data-cy = 'special'
            value = {special}
            onChange = {inputHandler}
          />
        </label>

        <label>
          <button
            data-cy = 'submit'
            onClick = {submitHandler}
          >
            Submit
          </button>
        </label>
      </form>
    </FormStyled>
  )
}