import { Router } from "express"
import { createNewPost, getAllPost, getPost, editPost, deletePost , getUserPost} from "../controllers/post.controler"
import schema from "../validators"
import { validateBody,validateParam } from "../middlewares/validate.middleware"

const router = Router()

router.post('/', validateBody(schema.postSchema),createNewPost)
router.get('/',getAllPost)
router.get('/:id',validateParam(schema.numberSchema,'id'),getPost)
router.get('/user/:id',getUserPost)
router.put('/:id',validateParam(schema.numberSchema,'id'),validateBody(schema.postSchema),editPost)
router.delete('/:id',deletePost)

export default router