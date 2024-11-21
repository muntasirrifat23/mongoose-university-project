import { model, Schema } from 'mongoose';
import { Guardian, Student } from './student.interface';

// Schema
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  matherName: { type: String, required: true },
  matherOccupation: { type: String, required: true },
  matherContactNo: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    fastName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  email: { type: String, required: true },
  gender: ['male', 'female'],
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-'],
  dateOFBirth: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
});

// Model
export const StudentModel = model<Student>('Student', studentSchema);
