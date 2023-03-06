import prisma from '../data/db'
import { hashPassword,createJWT } from '../utils'

export const signIn = (req, res, next) => {
  
}

export const signUp =async (req, res, next) => {
  const { account, password, name, email, date_of_birth, description } = req.body
  const hashPass = await hashPassword(password)
  try {
    const checkAccount = await prisma.user.findUnique({
      where: {
        account
      }
    })
  
    if (checkAccount !== null) return res.status(409).json("Account has exist")
    const checkEmail = await prisma.user.findUnique({
      where: {
        email
      }
    })
    if (checkEmail !== null) return res.status(409).json("Email has exist")
    

    const user = await prisma.user.create({
      data: {
        account,
        password: hashPass,
        name,
        email,
        avatar:req.file.path,
        date_of_birth:new Date(date_of_birth),
        description
      }
    })
    const token = createJWT(user)
    res.json({ token })
  } catch (e) {
    console.log(e)
    res.json("sign up fail")
  }
}