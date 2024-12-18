import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import { AnyZodObject } from 'zod';
import { studentValidationSchema } from '../student/student.zod.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();
router.post(
  '/create-student',
  validateRequest(studentValidationSchema),
  UserController.createStudent,
);

export const UserRoutes = router;
