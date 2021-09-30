import React from 'react';
import Recipe from './Recipe';

// component to handle all the recipes
const RecipeList = ({recipes}) => 

    {
        // mapping each recipe item to the Recipe container
        const renderedRecipes =  recipes.map( (recipe) => 
            {
                return <Recipe key={recipe._id} recipe = {recipe} />
            } );

        // all the recipes are being returned in the form of a table
        return <table id="resultOuterContainer" > {renderedRecipes}</table>;
    };
export default RecipeList;
