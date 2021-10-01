import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import recipesDAO from "./dao/recipesDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient
//DB port number
const port = process.env.PORT || 8000

//Connection to MongoDB
MongoClient.connect(
  process.env.RECIPES_DB_URI,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true }
  )
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await recipesDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })



 