import { z } from 'zod';

export const userValidation = z.object({
  id: z.string().trim(),
  password: z
    .string()
    .max(10, { message: 'Password can not more than 10 character' })
    .min(5, { message: 'Password can not be less than 5 character' })
    .trim(),
  needsPasswordChange: z.boolean().optional().default(true),
  role: z.enum(['admin', 'student', 'faculty']),
  status: z.enum(['in-progress', 'blocked']).default('in-progress'),
  isDeleted: z.boolean().optional().default(false),
});
