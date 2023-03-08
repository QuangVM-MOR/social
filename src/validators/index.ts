import Joi, { string } from "joi"
const schema = {
  userSchema: Joi.object().keys({
    account: Joi.string().max(255).required(),
    password: Joi.string().required().max(255),
    name: Joi.string().max(255),
    email: Joi.string().email().max(255),
    avatar: Joi.binary(),
    date_of_birth: Joi.string().pattern(/^(?:\d{4})-(?:\d{2})-(?:\d{2})T(?:\d{2}):(?:\d{2}):(?:\d{2}(?:\.\d*)?)(?:(?:-(?:\d{2}):(?:\d{2})|Z)?)$/),
    description:Joi.string()
  })
}

export default schema
