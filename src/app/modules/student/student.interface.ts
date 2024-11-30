import { Model, Types } from 'mongoose';

export type Name = {
  fastName: string;
  middleName: string;
  lastName: string;
};

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  matherName: string;
  matherOccupation: string;
  matherContactNo: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: Name;
  email: string;
  gender: 'male' | 'female';
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-';
  dateOFBirth: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  isDeleted: boolean;
};

export type StudentMethods = {
  isUserExists(id: string): Promise<TStudent | null>;
};

export type StudentModelInstance = Model<
  TStudent,
  Record<string, never>,
  StudentMethods
>;
