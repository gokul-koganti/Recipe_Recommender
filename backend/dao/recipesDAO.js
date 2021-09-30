import mongodb from "mongodb"

const ObjectId = mongodb.ObjectId
let recipes

export default class RecipesDAO {
  static async injectDB(conn) {
    if (recipes) {
      return
    }
    try {
      recipes = await conn.db(process.env.RECIPES_NS).collection("recipe")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in recipesDAO: ${e}`,
      )
    }
  }

  static async getRecipes({
    filters = null,
    page = 0,
    recipesPerPage = 10,
  } = {}) {
    let query
    if (filters) {
      if ("CleanedIngredients" in filters) {
        query = { $text: { $search: filters["CleanedIngredients"] } }
      } else if ("Cuisine" in filters) {
        query = { "Cuisine": { $eq: filters["Cuisine"] } }
      } 
    }

    let cursor
    
    try {
      cursor = await recipes
        .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { recipesList: [], totalNumRecipess: 0 }
    }

    const displayCursor = cursor.limit(recipesPerPage)
    try {
      const recipesList = await displayCursor.toArray()
      const totalNumRecipes = await recipes.countDocuments(query)

      return { recipesList, totalNumRecipes }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { recipesList: [], totalNumRecipes: 0 }
    }
  }
  
  static async getCuisines() {
    let cuisines = []
    try {
      cuisines = await recipes.distinct("Cuisine")
      return cuisines
    } catch (e) {
      console.error(`Unable to get cuisines, ${e}`)
      return cuisines
    }
  }
 
}


 