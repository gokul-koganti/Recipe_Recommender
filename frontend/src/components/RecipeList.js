import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({recipes}) => {
    
    const renderedRecipes =  recipes.map((recipe) => {
        return <Recipe key={recipe._id} recipe={recipe}/>
    });

    return <div className='ui relaxed divided list'>{renderedRecipes}</div>;
};
export default RecipeList;