import { z } from 'zod';

export const userValidation = z.object({
  password: z
    .string({
      invalid_type_error: 'Must be string',
    })
    .max(10, { message: 'Password can not more than 10 character' })
    .min(5, { message: 'Password can not be less than 5 character' })
    .optional(),
});
