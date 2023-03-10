import prisma from "../database/db"

export const addComment = async (req, res) => {
  try {
    console.log('->', req)
        return res.status(400).json("Add comment false")
    
    // const post = await prisma.post.findUnique({
    //   where: {
    //     id: +req.params.id
    //   }
    // })
    // if (post) {
    //   const data = {
    //     content: req.body.content,
    //     user_id: req.user.id,
    //     post_id: req.params.id,
    //   }

    //   const comment = await prisma.comment.create({
    //     data
    //   })
    //   console.log(comment)
    //   if (comment) {
    //     return res.status(200).json("Add comment success")
        
    //   } else {
    //     return res.status(400).json("Add comment false")
        
    //   }
    // } else {
    //   return res.status(409).json("not found post")
    // }
   
  } catch (e) {
    console.log(e)
    return res.json(e)
  }
}