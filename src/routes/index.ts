import express from "express";
import app from "../app";
import { signIn, signUp } from "../controllers/user.controler";
import { validateBody } from "../middlewares/validate.middleware";
import schema from "../validators";
import postRouter from './post.route'
import { protect } from "../middlewares/auth.middleware";

const router = express.Router()

const routes = [
  {
    path: "/post",
    route: postRouter,
  }
]

routes.forEach(route => {
  router.use(route.path,route.route)
})

const configRoute = (app,upload) => {
  app.use('/api',protect,router)
  app.post('/sign-in', validateBody(schema.userSchema) ,signIn)
  app.post('/sign-up',upload.single('avatar'),validateBody(schema.userSchema), signUp)
}
export default configRoute