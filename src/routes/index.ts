import express from "express";
import app from "../app";
import { signIn,signUp } from "../controllers/user";
// import { login } from "./auth";
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
  app.post('/sign-in', signIn)
  app.post('/sign-up',upload.single('avatar'), signUp)
}
export default configRoute