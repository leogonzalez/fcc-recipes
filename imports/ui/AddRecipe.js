import React from 'react';

export default function AddRecipe(props) {
  return (
    <div>
      Modal goes here
      <form onSubmit={props.addHandler}>
        <h4>Add Your Recipe</h4>
        <input
          placeholder='Recipe Title'
          onChange={props.editTitleHandler}
        />

        <textarea placeholder='Ingredients separated by comma'
          onChange={props.editListHandler}
        />
      </form>
      <button onClick={props.addHandler}>Add Recipe</button>
    </div>
  );
}
