import { Router } from "express"
import schema from "../validators"
import { validateBody, validateParam } from "../middlewares/validate.middleware"
import { addComment } from "../controllers/comment.controler"

const router = Router()

router.post("/",validateBody(schema.commentSchema),addComment)

export default router