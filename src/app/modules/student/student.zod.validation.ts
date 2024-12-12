import { z } from 'zod';

// Name Validation Schema
const nameValidationSchema = z.object({
  fastName: z
    .string()
    .min(5, 'First name must have at least 5 characters')
    .max(10, 'First name must have at most 10 characters')
    .trim()
    .regex(/^[A-Z][a-zA-Z]*$/, {
      message:
        'First name must start with a capital letter and contain only alphabets',
    }),
  middleName: z.string(),
  lastName: z.string(),
});

// Guardian Validation Schema
const guardianValidationSchema = z.object({
  fatherName: z.string().trim().min(1, 'Father name is required'),
  fatherOccupation: z.string().trim().optional(),
  fatherContactNo: z.string().trim().optional(),
  matherName: z.string().trim().min(1, 'Mother name is required'),
  matherOccupation: z.string().trim().optional(),
  matherContactNo: z.string().trim().optional(),
});

// Student Validation Schema
export const studentValidationSchema = z.object({
  body: z.object({
    password: z.string().trim(),
    student: z.object({
      name: nameValidationSchema,
      email: z.string().email('Email must be a valid email address').trim(),
      gender: z.enum(['male', 'female'], {
        errorMap: () => ({ message: 'Gender must be either male or female' }),
      }),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-'], {
        errorMap: () => ({
          message: 'Blood group must be valid (A+, A-, B+, B-, O+, O-)',
        }),
      }),
      dateOFBirth: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: 'Date of Birth must be a valid ISO date (YYYY-MM-DD)',
      }),
      presentAddress: z.string().trim().min(1, 'Present address is required'),
      permanentAddress: z
        .string()
        .trim()
        .min(1, 'Permanent address is required'),
      guardian: guardianValidationSchema,
    }),
  }),
});
