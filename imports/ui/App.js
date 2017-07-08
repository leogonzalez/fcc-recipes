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
      recipes: JSON.parse(window.localStorage.getItem('recipes')),
      pos: undefined
    };
  }

  addHandler(){
    if (this.state.recipeList&&this.state.recipeTitle) {
      const storage = this.state.recipes;
      console.log(this.state.pos);
      if(this.state.pos) {
        storage.splice(this.state.pos,1,[this.state.recipeTitle,this.state.recipeList]);
        window.localStorage.setItem('recipes',JSON.stringify(storage));
        this.setState({
          isOpen: false,
          recipeTitle:'',
          recipeList:'',
          recipes: storage,
          pos: undefined
        });

      } else {
        storage.push([this.state.recipeTitle,this.state.recipeList]);
        window.localStorage.setItem('recipes',JSON.stringify(storage));
        this.setState({
          isOpen: false,
          recipeTitle:'',
          recipeList:'',
          recipes: storage,
          pos: undefined
        });

      }
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
  //
  // editHandler(position){
  //   this.setState({isOpen:true});
  //   console.log(position);
  // }

  deleteHandler(position) {
    const storage = this.state.recipes;
    storage.splice(position,1);
    window.localStorage.setItem('recipes',JSON.stringify(storage));
    this.setState({
      recipeTitle:'',
      recipeList:'',
      recipes: storage,
      pos: undefined
    });
  }

  onClickHandler(pos){
    this.setState({
      isOpen: true,
      pos: pos
    });
  }

  render(){
    return (
      <div className='container'>
        <h1> Your Recipes Book </h1>
        <button
        className="btn btn-default"
        onClick={() => this.onClickHandler()}>Add Recipe</button>

        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Add Link"
          onRequestClose={() => this.setState({isOpen:false})}
          >

          <AddRecipe
            addHandler={() => this.addHandler(this.state.pos)}
            valueTitle={this.state.recipeTitle}
            valueList={this.state.recipeList}
            editTitleHandler={(e) => this.editTitleHandler(e)}
            editListHandler={(e) => this.editListHandler(e)}
          />

        </Modal>

        <div className='list'>
          <List
            editHandler={(position) => this.onClickHandler(position)}
            deleteHandler={(position) => this.deleteHandler(position)}
            recipeList={this.state.recipes}
          />
        </div>
      </div>
    )
  }
}
