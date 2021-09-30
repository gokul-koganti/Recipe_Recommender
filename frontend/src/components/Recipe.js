import React from 'react';
import '../video.css';
import Card from 'react-bootstrap/Card'
import VideoURL from './VideoURL';

// Recipe component dealing with individial recipe items
const Recipe = (recipe) => 

    {
        // splitting the ingredients with seperator as a comma
        var ingredients_seperated = recipe.recipe['Cleaned-Ingredients'].split(',');

        // mapping each ingredient to be displayes as a list item
        ingredients_seperated = ingredients_seperated.map( (ingredient) => 
        <li class= "recipe_ingredient_item" > {ingredient}</li> );

        // returns individual container for each recipe     
        return (
                <tr id = "resultContainer" >
                    <img  src={recipe.recipe['image-url']} alt={recipe.recipe.TranslatedRecipeName} />
                    <body>
                        <label  class="sideLabel"> <b>{recipe.recipe.TranslatedRecipeName}</b> </label><br/><br/>
                        <label class="sideLabel"><b> Ingredients:</b> </label><br/>
                        <ul class="result_ingredients"> {ingredients_seperated} </ul>
                    </body>
                </tr>   
            
        )
    };

export default Recipe;

