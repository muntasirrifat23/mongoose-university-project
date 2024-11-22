import { model, Schema } from 'mongoose';
import { Guardian, Name, Student } from './student.interface';

// Schema
const nameSchema = new Schema<Name>({
  fastName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
});
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
  name: { type: nameSchema, required: true },
  email: { type: String, required: true },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} must male or female',
    },
    required: [true, ''],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-'],
    required: [true, 'must give valid blood group'],
  },
  dateOFBirth: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: { type: guardianSchema, required: true },
});

// Model
export const StudentModel = model<Student>('Student', studentSchema);
