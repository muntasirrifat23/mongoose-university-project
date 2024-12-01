import { StudentService } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

// Get Student
const getAllStudent = catchAsync(async (req, res) => {
  const result = await StudentService.getStudentIntoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is get successfully',
    data: result,
  });
});

// Single Id Student
const singleID = catchAsync(async (req, res) => {
  const { studentID } = req.params;
  const result = await StudentService.getSingleStudentDB(studentID);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single id get successfully',
    data: result,
  });
});

// Delete id student
const deleteStudent = catchAsync(async (req, res) => {
  const { studentID } = req.params;
  const result = await StudentService.deleteStudentDB(studentID);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'deleted successfully',
    data: result,
  });
});

export const StudentController = {
  getAllStudent,
  singleID,
  deleteStudent,
};
