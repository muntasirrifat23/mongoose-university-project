import { Request, Response } from 'express';
import { StudentService } from './student.service';

// Post Student
const createStudent = async (req: Request, res: Response) => {
  try {
    // const student = req.body.student;
    const { student: studentData } = req.body;

    const result = await StudentService.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Something post wrong',
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
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Something get wrong',
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
      message: 'Student is single id get successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Something get single id wrong',
      error: err,
    });
  }
};

export const StudentController = {
  createStudent,
  getAllStudent,
  singleID,
};
