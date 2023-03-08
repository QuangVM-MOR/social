import express from "express";
import app from "../app";
import { signIn, signUp } from "../controllers/user";
import { validateBody } from "../middlewares/validate.middleware";
import schema from "../validators";
const router = express.Router()

const routes = [
  // {
  //   path: "/login",
  //   route: 'login',
  // }
]

routes.forEach(route => {
  router.use(route.path,route.route)
})

const configRoute = (app,upload) => {
  app.use('/api',router)
  app.post('/sign-in',(req, res, next) => { console.log('req.body==>', req.body);next() } ,signIn)
  app.post('/sign-up',upload.single('avatar'),validateBody(schema.userSchema), signUp)
}
export default configRoute