import express from "express";
// import { login } from "./auth";
const router = express.Router()

const routes = [
  {
    path: "/auth",
    route: 'login',
  }
]

routes.forEach(route => {
  router.use(route.path,route.route)
})

export default router