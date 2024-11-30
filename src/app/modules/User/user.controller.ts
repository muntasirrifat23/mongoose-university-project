import { Request, Response } from 'express';
import studentZodValidationSchema from '../student/student.zod.validation';
import { UserService } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    // const student = req.body.student;
    const { password, student: studentData } = req.body;

    // const zodData = studentZodValidationSchema.parse(studentData);
    // console.log(zodData);

    const result = await UserService.createStudentIntoDB(password, studentData);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message || 'Something post wrong',
      error: err,
    });
  }
};

export const UserController = {
  createStudent,
};
