import React from 'react';
import '../video.css';
import VideoURL from './VideoURL';

//  Recipe Component takes details of recipe and styles info like image,ingredients etc accordingly
const Recipe = (recipe) => {
    var ingredients_seperated = recipe.recipe['Cleaned-Ingredients'].split(',');
    ingredients_seperated = ingredients_seperated.map((ingredient) => <li class= "recipe_ingredients" > {ingredient}</li>);
    return (
                <tr id = "resultContainer" style={{ width: '18rem' }}>
                <img  src={recipe.recipe['image-url']} alt={recipe.recipe.TranslatedRecipeName} />
                <body>
                   <label> <b>{recipe.recipe.TranslatedRecipeName}</b> </label><br/><br/>
                    <label><b> Ingredients:</b> </label><br/>
                    
                       <ul id="result_unordered"> {ingredients_seperated} </ul>
                 </body>
                {/* <VideoURL recipe={recipe.recipe.TranslatedRecipeName}/> */}
            </tr>   
    )
    };
export default Recipe;
