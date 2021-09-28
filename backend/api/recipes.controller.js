import RecipesDAO from "../dao/recipesDAO.js"

export default class RecipesController {
  static async apiGetRecipes(req, res, next) {
    const recipesPerPage = req.query.recipesPerPage ? parseInt(req.query.recipesPerPage, 10) : 20
    const page = req.query.page ? parseInt(req.query.page, 10) : 0

    let filters = {}
    if (req.query.cuisine) {
      filters.cuisine = req.query.cuisine
    } else if (req.query.CleanedIngredients) {
      filters.CleanedIngredients = req.query.CleanedIngredients
    }

    const { recipesList, totalNumRecipes } = await RecipesDAO.getRecipes({
      filters,
      page,
      recipesPerPage,
    })

    let response = {
      recipes:recipesList,
      page: page,
      filters: filters,
      entries_per_page: recipesPerPage,
      total_results: totalNumRecipes,
    }
    res.json(response)
  }

  static async apiGetRecipeCuisines(req, res, next) {
    try {
      let cuisines = await RecipesDAO.getCuisines()
      res.json(cuisines)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }
} 