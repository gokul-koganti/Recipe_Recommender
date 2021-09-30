import logo from './logo.svg';
import './App.css';
import  Form from './components/Form.js';
import Header from './components/Header';
import recipeDB from './apis/recipeDB';
import RecipeList from './components/RecipeList';
import React,{Component} from 'react';

class App extends Component{
    constructor(){
      super()
      this.state={
          cuisine : "Any",
          NoIngredients : 0,
          ingredients: new Set(),
          video: null,
          recipe: null,
          recipeList: []
        }
      }

    //callback function before Form Component is invoked by render function
    formGetter = (cuisineInput, NoIngredientsInput, ingredientInput) => {
      this.setState({
        cuisine : cuisineInput,
        NoIngredients: NoIngredientsInput ,
        ingredients: ingredientInput 
      })
    }

    //callback function that Form Component after user input
    handleSubmit = async (cuisineInput,noIngredientsInput,ingredientsInput) => {
      this.setState({
        cuisine: cuisineInput,
        NoIngredients: noIngredientsInput,
        ingredients:ingredientsInput

      })
      //converting set datatype to array 
      const items = Array.from(ingredientsInput)
      //invoking getRecipeDetails function
      this.getRecipeDetails(items);

  };
 
  // This function invokes MongoDB to fetch recipe details based on user input
  getRecipeDetails = async (ingredient) => {
    try {
      const queryParams = ingredient.map((n) => `CleanedIngredients=${n}`).join('&')
      const response = await recipeDB.get(`/recipes?${queryParams}`);
      this.setState({
        recipeList: response.data.recipes
      });
    } catch (err) {
        console.log(err);
    }    
 }

  render(){
    return(
      <div>
        <Header/>
        <Form sendFormData = {this.handleSubmit}/>
        <RecipeList recipes={this.state.recipeList}/>
      </div>
    )
  }
}

export default App;