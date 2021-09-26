import React, {Component} from "react";

class Form extends Component{
   
    constructor(){
        super()
        this.state={
            cuisine : "Any",
            numberIngredients: 0,
            ingredients: new Set()  
            
        }
    }

    
    cuisineUpdate = (event) =>{
        this.setState({
            cuisine : event.target.value,
            numberIngredients : this.state.numberIngredients,
            ingredients : this.state.ingredients
        
        },()=>console.log(this.state))
    }

    numberUpdate = (event) =>{
        this.setState({
            cuisine : this.state.cuisine,
            numberIngredients: event.target.value,
            ingredients:this.state.ingredients
        
        },()=>console.log(this.state))
    }
    
    printHander =() => {
        for (const item of this.state.ingredients) {
            console.log(1,item)
          }
        
    }
    addHandler = (event)=> {
        const ingredient = document.getElementById("ingredient").value
        this.setState({
            cuisine : this.state.cuisine,
            numberIngredients : this.state.numberIngredients,
            ingredients:new Set(this.state.ingredients).add(ingredient)
        
        },()=>this.printHander(),()=>console.log(this.state))
    }

    
    removeHandler = () => {
        var discardIngredient = window.prompt("Enter the item to be discarded: ");
        var ingredientList = this.state.ingredients
        ingredientList.delete(discardIngredient)
        this.setState({
            cuisine : this.state.cuisine,
            numberIngredients : this.state.numberIngredients,
            ingredients: ingredientList
        
        },()=>this.printHander(),()=>console.log(this.state))

    }
    
    handleSubmit = (event) => {
        this.props.sendFormData(this.state.cuisine, this.state.numberIngredients,this.state.ingredients)
        // alert(this.state.max_cal)
        // console.log(this.state.ingredients)
    event.preventDefault()
        
    }

   

    render(){
        const cuisine_list = ["Any", "Mexican", "Swedish", "Latvian", "Italian", "Spanish", "American","Scottish","British","Thai",
        "Japanese","Chinese","Indian","Canadian","Russian","Jewish","Polish","German","French","Hawaiian","Brazilian", 
        "Peruvian","Cuban","Tibetian","Salvadorian","Egyptian","Greek","Belgian","Irish","Welsh","Mormon","Cajun","Portugese",
    "Turkish","Haitian","Tahitian","Kenyan","Korean","Algerian","Nigerian","Libyan"]
        return(
            <div class="container">

                <form onSubmit={this.handleSubmit}>
                    
                   
                    <div id='FormContainer1'>
                    <label id='IngredientLabel'>Ingredients</label><br/>
                    <label class='sideLabel'> Ingredient: </label>
                     <input type = "text" id = "ingredient" /> 
                     <button onClick ={this.addHandler} type="button" > Add item</button>
                     <button onClick ={this.removeHandler} type="button"> Remove item</button><br/><br/>
                     <label class='sideLabel'>Added Items:</label>
                    <p id="addedItems"></p>
                    </div>

                    <div id='FormContainer2'>
                    
                    <label class='sideLabel'> Number of Ingredients: </label>
                     <input type = "number" id = "NoIngredient" onChange={this.numberUpdate} /> 
                    </div>
                    

                  
                    <div id = 'FormContainer3'>
                    <label class='sideLabel'> Cusine Selection: </label>
                    <select value={this.state.cuisine} onChange={this.cuisineUpdate} >{
                        cuisine_list.map((category,i) => <option key={i}>{category}</option>)
                    }
                    </select>
                    </div>

                 <div id = 'FormContainer4'>
                    <button type="button" id='submit' onClick={this.handleSubmit}  > <h4>Search Recipes</h4> </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
