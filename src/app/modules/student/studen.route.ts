import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.get('/', StudentController.getAllStudent);

router.get('/:studentID', StudentController.singleID);

router.delete('/:studentID', StudentController.deleteStudent);

export const StudentRoutes = router;
