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
          min_cal : "",
          max_cal : "",
          ingredients: new Set()  
        }
      }
    formGetter = (cuisine, minCal, maxCal, ing) => {
      this.setState({
        cuisine : cuisine,
          min_cal : minCal,
          max_cal : maxCal,
          ingredients: ing 
      })
    }

  render(){
    return(
    <div>
    <Header/>
    <Form sendFormData = {this.formGetter}/>
      <p> cuisine: {this.state.cuisine}</p>
      <p> max: {this.state.max_cal}</p>
      <p> min: {this.state.min_cal}</p>
      <p> ingredients: {this.state.ingredients}</p>
    </div>
    )
  }
}

export default App;
