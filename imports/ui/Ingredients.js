import React from 'react';

export default function Ingredients(props) {
  return (
    <div>
    <ul className='list-group'>
      {props.ingredientsList.split(',').map((item) => {
          return (
            <li className='list-group-item' key={item}>{item}</li>
          )
        })}
    </ul>
    </div>
  );
}
