import { model, Schema } from 'mongoose';
import {
  Guardian,
  Name,
  TStudent,
  StudentMethods,
  StudentModelInstance,
} from './student.interface';
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

const studentSchema = new Schema<
  TStudent,
  StudentModelInstance,
  StudentMethods
>({
  id: { type: String, required: [true, 'Id is required'] },
  user: {
    type: Schema.Types.ObjectId,
    unique: true,
    required: [true, 'User Id is required'],
    ref: 'User',
  },
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
    required: [true, 'Gender required'],
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
  isDeleted: { type: Boolean, default: false },
});

// virtual
studentSchema.virtual('fullName').get(function () {
  return this.name.fastName + this.name.middleName + this.name.lastName;
});

// Middleware Query
studentSchema.pre('find', function (next) {
  this.find({
    isDeleted: { $ne: true },
  });
  next();
});
studentSchema.pre('findOne', function (next) {
  this.find({
    isDeleted: { $ne: true },
  });
  next();
});

//Middleware Aggregate
studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
});

// Model
studentSchema.methods.isUserExists = async function (id: string) {
  const existingUser = await StudentModel.findOne({ id });
  return existingUser;
};
export const StudentModel = model<TStudent, StudentModelInstance>(
  'Student',
  studentSchema,
);
