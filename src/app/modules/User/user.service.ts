import config from '../../config';
import { TStudent } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use default password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  //set manually
  userData.id = '21103013';

  // create user
  const newUser = await User.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id; //embedding id
    studentData.user = newUser._id; // Reference _id
  }

  //call student model
  const newStudent = await StudentModel.create(studentData);
  return newStudent;
};

export const UserService = {
  createStudentIntoDB,
};
