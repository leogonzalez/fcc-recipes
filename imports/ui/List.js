import React from 'react';
import Item from './Item.js';

export default function List(props) {
  return (
    <div>
      <p>Here I generate a list of Items</p>
      {props.recipeList.map((item) => {
        return (

            <Item
            key={item[0]}
            editHandler={props.editHandler}
            deleteHandler={props.deleteHandler}
            recipeTitle={item[0]}
            ingredientsList={item[1]}/>

        );
      })}

    </div>
  );
}
