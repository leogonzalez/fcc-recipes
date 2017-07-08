import React from 'react';
import Modal from 'react-modal';

import AddRecipe from './AddRecipe.js';
import List from './List.js';


export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
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
        isOpen: false,
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
    this.setState({isOpen:true});
    console.log(position);
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

  onClickHandler(){
    this.setState({
      isOpen: true
    });
  }

  render(){
    return (
      <div className='container'>
        <h1> Your Recipes Book </h1>
        <button onClick={(e) => this.onClickHandler()}>Add Recipe</button>

        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Add Link"
          onRequestClose={() => this.setState({isOpen:false})}>

          <AddRecipe
            addHandler={(e) => this.addHandler(e)}
            valueTitle={this.state.recipeTitle}
            valueList={this.state.recipeList}
            editTitleHandler={(e) => this.editTitleHandler(e)}
            editListHandler={(e) => this.editListHandler(e)}
            editHandler={(position) => this.editHandler(position)}
          />

        </Modal>

        <List
          editHandler={(position) => this.editHandler(position)}
          deleteHandler={(position) => this.deleteHandler(position)}
          recipeList={this.state.recipes}
        />
      </div>
    )
  }
}
