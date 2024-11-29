import { Request, Response } from 'express';
import { StudentService } from './student.service';
import studentJoiValidationSchema from './student.joi.validation';
import studentZodValidationSchema from './student.zod.validation';

// Post Student
const createStudent = async (req: Request, res: Response) => {
  try {
    // const student = req.body.student;
    const { student: studentData } = req.body;

    // Joi validation
    const { value, error } = studentJoiValidationSchema.validate(studentData);
    // console.log(value, error);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something post wrong',
    //     error: error.details,
    //   });
    // }

    // Zod Validation
    // const zodData = studentZodValidationSchema.parse(studentData);
    // console.log(zodData);

    const result = await StudentService.createStudentIntoDB(value);
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

// Get Student
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getStudentIntoDB();
    res.status(200).json({
      success: true,
      message: 'Student is get successfully',
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message || 'Something get wrong',
      error: err,
    });
  }
};

// Single Id Student
const singleID = async (req: Request, res: Response) => {
  try {
    const { studentID } = req.params;
    const result = await StudentService.getSingleStudentDB(studentID);
    res.status(200).json({
      success: true,
      message: 'single id get successfully',
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message || 'get single id wrong',
      error: err,
    });
  }
};

// Delete id student
const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentID } = req.params;
    const result = await StudentService.deleteStudentDB(studentID);
    res.status(200).json({
      success: true,
      message: 'deleted successfully',
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message || 'delete went wrong',
      error: err,
    });
  }
};

export const StudentController = {
  createStudent,
  getAllStudent,
  singleID,
  deleteStudent,
};
