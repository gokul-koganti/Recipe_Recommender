import React, {Component} from "react";

class Form extends Component{
   
    constructor(){
        super()
        this.state={
            cuisine : "Any",
            min_cal : "",
            max_cal : "",
            ingredients: new Set()  
            
        }
    }

   
    minUpdate = (event) =>{
        this.setState({
            cuisine : this.state.cuisine,
            min_cal : event.target.value,
            max_cal : this.state.max_cal,
            ingredients:this.state.ingredients
        
        },()=>console.log(this.state))
    }

    
    
    maxUpdate = (event) =>{
        this.setState({
            cuisine : this.state.cuisine,
            min_cal : this.state.min_cal,
            max_cal : event.target.value,
            ingredients:this.state.ingredients
        
        },()=>console.log(this.state))
    }

    
    cuisineUpdate = (event) =>{
        this.setState({
            cuisine : event.target.value,
            min_cal : this.state.min_cal,
            max_cal : this.state.max_cal,
            ingredients:this.state.ingredients
        
        },()=>console.log(this.state))
    }
    
    
    addHandler = (event)=> {
        const ingredient = document.getElementById("ingredient").value
        console.log(ingredient)
        this.setState({
            cuisine : this.state.cuisine,
            min_cal : this.state.min_cal,
            max_cal : this.state.max_cal,
            ingredients:new Set(this.state.ingredients).add(ingredient)
        
        },()=>console.log(this.state))
    }

    
    removeHandler = () => {
        var discardIngredient = window.prompt("Enter the item to be discarded: ");
        var ingredientList = this.state.ingredients
        ingredientList.delete(discardIngredient)
        this.setState({
            cuisine : this.state.cuisine,
            min_cal : this.state.min_cal,
            max_cal : this.state.max_cal,
            ingredients: ingredientList
        
        },()=>console.log(this.state))

    }
    
    handleSubmit = (event) => {
        this.props.sendFormData(this.state.cuisine, this.state.min_cal,this.state.max_cal,this.state.ingredients)
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
            <div>

                <form onSubmit={this.handleSubmit}>
                    
                   
                    <div id='FormContainer1'>
                    <label id='IngredientLabel'>Ingredients</label><br/>
                    <label class='sideLabel'> Ingredient: </label>
                     <input type = "text" id = "ingredient" /> 
                     <button onClick ={this.addHandler} type="button" > Add item</button>
                     <button onClick ={this.removeHandler} type="button"> Remove item</button><br/><br/>
                    </div>
                    

                    <div id = 'FormContainer2'>
                    <label id ='CalorieLabel'> <b>Calorie Filter</b> </label><br/><br/>
                    <label class='sideLabel'> Minimum Calories: </label> 
                    <input type = "text" value={this.state.min_cal} onChange={this.minUpdate}/><br/>
                    <label class='sideLabel'> Maximum Calories: </label>
                     <input type = "text" value={this.state.max_cal} onChange={this.maxUpdate}/><br/>
                    </div>

                    <div id = 'FormContainer3'>
                    <label class='sideLabel'> Cusine Selection: </label>
                    <select value={this.state.cuisine} onChange={this.cuisineUpdate} >{
                        cuisine_list.map((category,i) => <option key={i}>{category}</option>)
                    }
                    </select>
                    </div>


                <button type="button" id='submit' onClick={this.handleSubmit}  > <h4>Search Recipes</h4> </button>
                </form>
            </div>
        )
    }
}

export default Form
