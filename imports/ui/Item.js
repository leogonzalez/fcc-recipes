import React from 'react';
import Ingredients from './Ingredients.js';


export default function Item(props) {
  return (
    <div className='panel panel-success'>

      <div className='panel-heading'>
        <h3 className='panel-title'>{props.recipeTitle}</h3>
      </div>



      <div className='panel-body'>
        <Ingredients
          ingredientsList={props.ingredientsList}
        />

      <div className="btn-group" role="group" aria-label="...">
        <button
          type="button"
          className="btn btn-default"
          onClick={() => props.deleteHandler(props.position)}>
        Delete</button>

        <button
          type="button"
          className="btn btn-default"
          onClick={() => props.editHandler(props.position)}>
        Edit</button>
      </div>




      </div>
    </div>
  );
}
