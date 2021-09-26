import logo from './logo.svg';
import './App.css';
import  Form from './components/Form.js';
import Header from './components/Header';
import React,{Component} from 'react';

/*function App() {
  
  return (
    <div className="App">
      <Form />
    </div>
  );
}*/
class App extends Component{

  
    constructor(){
      super()
      this.state={
          cuisine : "Any",
          NoIngredients : 0,
          ingredients: new Set()  
        }
      }
    formGetter = (cuisineInput, NoIngredientsInput, ingredientInput) => {
      this.setState({
        cuisine : cuisineInput,
        NoIngredients: NoIngredientsInput ,
        ingredients: ingredientInput 
      })


    }

  render(){
    return(
    <div>
    <Header/>
    <Form sendFormData = {this.formGetter}/>
    </div>
    )
  }
}

export default App;

