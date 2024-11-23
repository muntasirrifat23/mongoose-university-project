import Joi from 'Joi';

const nameValidationSchema = Joi.object({
  fastName: Joi.string()
    .min(5)
    .max(10)
    .trim()
    .regex(/^[A-Z][a-zA-Z]*$/)
    .messages({
      'string.pattern.base': '{#value} is not capitalized',
    })
    .required(),

  middleName: Joi.string()
    .min(5)
    .max(10)
    .trim()
    .regex(/^[A-Z][a-zA-Z]*$/)
    .messages({
      'string.pattern.base': '{#value} is not capitalized',
    })
    .required(),

  lastName: Joi.string()
    .min(5)
    .max(10)
    .trim()
    .regex(/^[A-Z][a-zA-Z]*$/)
    .messages({
      'string.pattern.base': '{#value} is not capitalized',
    })
    .required(),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required(),
  fatherOccupation: Joi.string().trim().required(),
  fatherContactNo: Joi.string()
    .pattern(/^\d{10}$/)
    .trim()
    .required()
    .messages({
      'string.pattern.base': '{#value} is not a valid phone number',
    }),
  matherName: Joi.string().trim().required(),
  matherOccupation: Joi.string().trim().required(),
  matherContactNo: Joi.string()
    .pattern(/^\d{10}$/)
    .trim()
    .required()
    .messages({
      'string.pattern.base': '{#value} is not a valid phone number',
    }),
});

const studentJoiValidationSchema = Joi.object({
  id: Joi.string().trim(),
  name: nameValidationSchema.required(),
  email: Joi.string().email().trim().required().messages({
    'string.email': '{#value} is not a valid email address',
  }),
  gender: Joi.string().valid('male', 'female').trim().required().messages({
    'any.only': '{#value} must be either male or female',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'O+', 'O-')
    .trim()
    .required()
    .messages({
      'any.only': '{#value} must be a valid blood group',
    }),
  dateOFBirth: Joi.date().iso().required().messages({
    'date.format': '{#value} must be a valid ISO date (YYYY-MM-DD)',
  }),
  presentAddress: Joi.string().trim().required(),
  permanentAddress: Joi.string().trim().required(),
  guardian: guardianValidationSchema.required(),
});

export default studentJoiValidationSchema;
