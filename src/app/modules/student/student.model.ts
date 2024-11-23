import { model, Schema } from 'mongoose';
import { Guardian, Name, Student } from './student.interface';
import validator from 'validator';

// Schema
const nameSchema = new Schema<Name>({
  fastName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: [10, 'Less than 10 character'],
    trim: true,
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1); //Rifat
        return firstNameStr === value;
      },
      message: '{VALUE} is not capitalized',
    },
  },
  middleName: { type: String, required: true },
  lastName: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid, only post character',
    },
  },
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
  email: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} email is not valid',
    },
  },
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
