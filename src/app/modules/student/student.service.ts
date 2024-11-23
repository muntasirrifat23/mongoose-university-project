import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (studentData: Student) => {
  // const result = await StudentModel.create(studentData); // built in instance
  const student = new StudentModel(studentData);

  if (await student.isUserExists(studentData.id)) {
    throw new Error('Already Exists');
  }
  const result = await student.save(); // create an instance
  return result;
};

const getStudentIntoDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
export const StudentService = {
  createStudentIntoDB,
  getStudentIntoDB,
  getSingleStudentDB,
};
