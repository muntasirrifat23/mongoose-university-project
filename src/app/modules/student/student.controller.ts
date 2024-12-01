import { NextFunction, Request, Response } from 'express';
import { StudentService } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

// Post Student
// const createStudent = async (req: Request, res: Response) => {
//   try {
//     // const student = req.body.student;
//     const { student: studentData } = req.body;

//     // Joi validation
//     const { value, error } = studentJoiValidationSchema.validate(studentData);
//     // console.log(value, error);

//     // Zod Validation
//     // const zodData = studentZodValidationSchema.parse(studentData);
//     // console.log(zodData);

//     const result = await StudentService.createStudentIntoDB(value);
//     res.status(200).json({
//       success: true,
//       message: 'Student is created successfully',
//       data: result,
//     });
//   } catch (err: any) {
//     console.log(err);
//     res.status(500).json({
//       success: false,
//       message: err.message || 'Something post wrong',
//       error: err,
//     });
//   }
// };

// Get Student
const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentService.getStudentIntoDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is get successfully',
      data: result,
    });
  } catch (err) {
    next(err);
    // console.log(err);
    // res.status(500).json({
    //   success: false,
    //   message: err.message || 'Something get wrong',
    //   error: err,
    // });
  }
};

// Single Id Student
const singleID = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentID } = req.params;
    const result = await StudentService.getSingleStudentDB(studentID);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'single id get successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// Delete id student
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentID } = req.params;
    const result = await StudentService.deleteStudentDB(studentID);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'deleted successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const StudentController = {
  getAllStudent,
  singleID,
  deleteStudent,
};
