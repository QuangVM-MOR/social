import Joi, { string } from "joi"
const schema = {
  userSchema: Joi.object().keys({
    account: Joi.string().max(255).required(),
    password: Joi.string().required().max(255),
    name: Joi.string().max(255),
    email: Joi.string().required().email().max(255),
    avatar: Joi.binary(),
    date_of_birth: Joi.string().custom(isValidDate),
    description:Joi.string()
  }),
  postSchema: Joi.object().keys({
    content: Joi.string().required(),
  }),
  numberSchema: Joi.object().keys({
    param:Joi.number(),
  }),
  commentSchema: Joi.object().keys({
    content: Joi.string().required(),
  })
}

function isValidDate(value, helpers) {
  const regDate = new RegExp(String.raw`^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$`)
  if (!regDate.test(value)) return helpers.message('error date')
  return true
}


export default schema
