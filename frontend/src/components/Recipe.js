import React from 'react';
import '../video.css';
import Card from 'react-bootstrap/Card'
import VideoURL from './VideoURL';

const Recipe = (recipe) => {
   
    return (
            <div className='ui embed'>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={recipe.recipe['image-url']} alt={recipe.recipe.TranslatedRecipeName} width="100px" height="100px"/>
                <Card.Body>
                    <Card.Title>{recipe.recipe.TranslatedRecipeName}</Card.Title>
                    <Card.Text> Ingredients:
                        {recipe.recipe['Cleaned-Ingredients']}
                    </Card.Text>
                 </Card.Body>
                {/* <VideoURL getRecipeVideo={recipe.recipe.TranslatedRecipeName}/> */}
            </Card>    
            </div>
    )
    };

export default Recipe;