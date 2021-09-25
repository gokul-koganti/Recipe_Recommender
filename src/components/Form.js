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
    addHandler = ()=> {
        const ingredient = document.getElementById("ingredient").value
        console.log(ingredient)
       this.setState({
            cuisine : this.state.cuisine,
            min_cal : this.state.min_cal,
            max_cal : this.state.max_cal,
            ingredients:new Set(this.state.ingredients).add(ingredient)
        
        },()=>console.log(this.state.ingredients))
    }
    render(){
        const cuisine_list = ["Any", "Mexican", "Swedish", "Latvian", "Italian", "Spanish", "American","Scottish","British","Thai",
        "Japanese","Chinese","Indian","Canadian","Russian","Jewish","Polish","German","French","Hawaiian","Brazilian", 
        "Peruvian","Cuban","Tibetian","Salvadorian","Egyptian","Greek","Belgian","Irish","Welsh","Mormon","Cajun","Portugese",
    "Turkish","Haitian","Tahitian","Kenyan","Korean","Algerian","Nigerian","Libyan"]
        return(
            <div>

                <form>
                    <label><h3>Ingredient List</h3></label><br/>
                   
                    <div>
                    
                    <input type = "text" id = "ingredient" /> <button onClick ={this.addHandler} type="button" > Add item</button><button> Remove item</button><br/><br/>
                    

                   
                    </div>
                    

                    <div>
                    <label> <b>Calorie Filter</b> </label><br/><br/>
                    <label> Minimum Calories: </label> <input type = "text" value={this.state.min_cal} onChange={this.minUpdate}/>
                    <label> Maximum Calories: </label> <input type = "text" value={this.state.max_cal} onChange={this.maxUpdate}/>
                    </div>

                    <div>
                    <select value={this.state.cuisine} onChange={this.cuisineUpdate} >{
                        cuisine_list.map((category,i) => <option key={i}>{category}</option>)
                    }
                    </select>
                    </div>


                <button type="submit"> <h4>Search Recipes</h4> </button>
                </form>
            </div>
        )
    }
}

export default Form