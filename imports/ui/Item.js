import React from 'react';
import Ingredients from './Ingredients.js';


export default function Item(props) {
  return (
    <div>
      <h3>{props.recipeTitle}</h3>
      <Ingredients
        ingredientsList={props.ingredientsList}
      />
      <button onClick={() => props.deleteHandler(props.position)}>Delete</button>
      <button onClick={props.editHandler}>Edit</button>
    </div>
  );
}
