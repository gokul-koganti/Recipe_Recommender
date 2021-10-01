import './App.css';
import  Form from './components/Form.js';
import Header from './components/Header';
import recipeDB from './apis/recipeDB';
import RecipeList from './components/RecipeList';
import React,{Component} from 'react';

// Main component of the project
class App extends Component{

    // constructor for the App Component
    constructor(){

      super()

      this.state={
          //cuisine : "Any",
          //NoIngredients : 0,
          ingredients: new Set(),
          recipeList: []
        }

      }
    
    // Function to get the user input from the Form component on Submit action
    handleSubmit = async (ingredientsInput) => {
      this.setState({
        //cuisine: cuisineInput,
        //NoIngredients: noIngredientsInput,
        ingredients:ingredientsInput

      })
  
      const items = Array.from(ingredientsInput)
      this.getRecipeDetails(items[0]);

  };
 
  getRecipeDetails = async (ingredient) => {
    try {
      const response = await recipeDB.get('/recipes', {
        params: {
          'CleanedIngredients' : ingredient
        }
      })
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

         {/* handleSubmit function is being sent as a prop to the form component*/}

        <Form sendFormData = {this.handleSubmit}/>

        {/* RecipeList is the component where results are displayed. 
        App's recipeList state item is being sent as a prop
        */}

        <RecipeList recipes={this.state.recipeList}/>
      </div>
    )
  }
}

export default App;
