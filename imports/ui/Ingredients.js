import React from 'react';

export default function Ingredients(props) {
  return (
    <div>
      Ingredients List
      {
        props.ingredientsList.split(',').map((item) => {
          return (
            <p key={item}>{item}</p>
          )
        })
      }
    </div>
  );
}
