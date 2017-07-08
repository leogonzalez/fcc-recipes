import React from 'react';

export default function AddRecipe(props) {
  return (
    <div>
      <form onSubmit={props.addHandler}>
        <h4>Add Your Recipe</h4>
        <input
          placeholder='Recipe Title'
          value={props.valueTitle}
          onChange={props.editTitleHandler}
        />

        <textarea placeholder='Ingredients separated by comma'
          value={props.valueList}
          onChange={props.editListHandler}
        />
      </form>
      <button
      className="btn btn-default"
      onClick={props.addHandler}>Add Recipe</button>
    </div>
  );
}
