import React from 'react';

import AddRecipe from './AddRecipe.js';
import List from './List.js';
import localStorageKeys from '../api/localStorage.js';


export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      recipeTitle: '',
      recipeList:'',
      recipes: JSON.parse(window.localStorage.getItem('recipes'))
    };
  }

  addHandler(){
    if (this.state.recipeList&&this.state.recipeTitle) {
      const storage = this.state.recipes;
      storage.push([this.state.recipeTitle,this.state.recipeList]);
      window.localStorage.setItem('recipes',JSON.stringify(storage));
      this.setState({
        recipes: storage
      });
    }
  }

  editTitleHandler(e){
    this.setState({
      recipeTitle: e.target.value
    })
  }

  editListHandler(e){
    this.setState({
      recipeList: e.target.value
    })
  }

  editHandler(){
    console.log(`Este foi um edit`)
  }

  deleteHandler() {
    console.log(`Este foi um delete`)
  }

  render(){
    return (
      <div>
        <h1> Your Recipes Book </h1>

        <AddRecipe
          addHandler={(e) => this.addHandler(e)}
          editTitleHandler={(e) => this.editTitleHandler(e)}
          editListHandler={(e) => this.editListHandler(e)}
        />

        <List
          editHandler={this.editHandler}
          deleteHandler={this.deleteHandler}
          recipeList={this.state.recipes}
        />
      </div>
    )
  }
}
