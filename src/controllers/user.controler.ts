import prisma from '../database/db'
import { hashPassword,createJWT, comparePasswords } from '../utils'

export const signIn =async  (req, res, next) => {
  const user = await prisma.user.findUnique({
    where: { account: req.body.account },
  });

  if (!user) {
    res.status(401);
    res.send("Invalid username or password");
    return;
  }
    const isValid = await comparePasswords(req.body.password, user.password);
    
    if (!isValid) {
      res.status(401);
      res.send("Invalid username or password");
      return;
    }
    
    const token = createJWT(user);
    res.json({ token });
    
}

export const signUp = async (req, res, next) => {
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
        avatar:req?.file?.path ?? '',
        date_of_birth:new Date(date_of_birth),
        description
      }
    })
    const token = createJWT(user)
    res.json({ token })
  } catch (e) {
    res.json("sign up fail")
  }
}

