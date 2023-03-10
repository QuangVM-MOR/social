import prisma from "../database/db"

export const createNewPost = async (req, res,next) => {
  try {
    const postData = {
      user_id:req.user.id,
      content:req.body.content
    }
    const post = await prisma.post.create({data: postData})
    return res.status(200).json("Add post success")
  } catch (e) {
    next(e)
  }
}

export const getAllPost =async (req, res,next) => {
  try {
    const posts = await prisma.post.findMany()
    return res.status(200).json({data:posts})
  } catch (e) {
    next(e)
  }
} 

export const getPost = async (req, res,next) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: +req.params.id
      }
    })
    return res.status(200).json({data:post})
  } catch (e) {
    return res.status(200).json({ data: {} })
  }
} 

export const editPost = async (req, res,next) => {
  try {
    const updatePost = await prisma.post.update({
      where: {
        id: +req.params.id,
      },
      data: {
        content: req.body.content,
        modify_time: new Date(),
      }
    })
    return res.status(200).json("Update success")
  } catch (e) {
    return res.status(400).json("Update false")
  }
} 

export const deletePost =async (req, res) => {
  try {
    const deletePost = await prisma.post.delete({
      where: {
        id: +req.params.id
      }
    })
    console.log('deletePost',deletePost)
    return res.status(200).json("Delete success")

  } catch (e) {
    return res.status(400).json("Delete false")
  }
} 

