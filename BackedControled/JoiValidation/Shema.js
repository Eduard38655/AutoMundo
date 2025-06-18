// schema.js
import Joi from "joi";

const schema = Joi.object({
  FullName: Joi.string().min(5).max(20).required().empty(''),
  Mensaje: Joi.string().min(10).max(100).required().empty(''),
  Email: Joi.string().email().required().label('Correo electrónico').empty(''),
  Asunto: Joi.string().min(5).max(20).required().empty(''),
});

export default schema;
