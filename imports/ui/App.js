import React from 'react';

import AddRecipe from './AddRecipe.js';
import List from './List.js';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      recipeTitle:'',
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
        recipeTitle:'',
        recipeList:'',
        recipes: storage
      });
      console.log(this.state);
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

  editHandler(position){
    if (this.state.recipeList&&this.state.recipeTitle) {
      const storage = this.state.recipes;
      storage.splice(position,1,[this.state.recipeTitle,this.state.recipeList]);
      window.localStorage.setItem('recipes',JSON.stringify(storage));
      this.setState({
        recipeTitle:'',
        recipeList:'',
        recipes: storage
      });
    }
  }

  deleteHandler(position) {
    const storage = this.state.recipes;
    storage.splice(position,1);
    window.localStorage.setItem('recipes',JSON.stringify(storage));
    this.setState({
      recipeTitle:'',
      recipeList:'',
      recipes: storage
    });
  }

  render(){
    return (
      <div>
        <h1> Your Recipes Book </h1>

        <AddRecipe
          addHandler={(e) => this.addHandler(e)}
          valueTitle={this.state.recipeTitle}
          valueList={this.state.recipeList}
          editTitleHandler={(e) => this.editTitleHandler(e)}
          editListHandler={(e) => this.editListHandler(e)}
        />

        <List
          editHandler={(position) => this.editHandler(position)}
          deleteHandler={(position) => this.deleteHandler(position)}
          recipeList={this.state.recipes}
        />
      </div>
    )
  }
}
