import { Router } from "express"
import { createNewPost, getAllPost, getPost, editPost, deletePost } from "../controllers/post.controler"
import schema from "../validators"
import { validateBody,validateParam } from "../middlewares/validate.middleware"
import commentRouter from './comment.route'
import { addComment } from "../controllers/comment.controler"
const router = Router()

router.post('/', validateBody(schema.postSchema),createNewPost)
router.get('/',getAllPost)
router.get('/:id',validateParam(schema.numberSchema,'id'),getPost)
router.post('/:id',validateParam(schema.numberSchema,'id'),validateBody(schema.postSchema),editPost)
router.delete('/:id',validateParam(schema.numberSchema,'id'),deletePost)
router.post("/:id/comment",validateParam(schema.numberSchema,'id'),validateBody(schema.commentSchema),addComment)

export default router