import express from "express"
import RecipesCtrl from "./recipes.controller.js"

const router = express.Router()
//URl to get the recipes 
router.route("/").get(RecipesCtrl.apiGetRecipes)

router.route("/cuisines").get(RecipesCtrl.apiGetRecipeCuisines)


export default router


