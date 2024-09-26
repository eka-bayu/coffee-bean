import Joi from "joi";

const userSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .pattern(/^[a-zA-Z0-9]+$/), // Only alphanumeric characters
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  phone: Joi.string()
    .pattern(/^[0-9]{10,14}$/)
    .required(), // Valid phone number pattern
  password: Joi.string()
    .min(8)
    .max(30)
    .required()
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,}$"))
    .messages({
      "string.pattern.base":
        "Password must contain at least one lowercase letter, one uppercase letter, and one number.",
    }),
  // Validate for strong password
});

export default userSchema;
