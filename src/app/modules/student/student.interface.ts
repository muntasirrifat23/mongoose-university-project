// import { Schema, model, connect } from 'mongoose';

import { Model } from 'mongoose';

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

export type Student = {
  id: string;
  password: string;
  name: Name;
  email: string;
  gender: 'male' | 'female';
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-';
  dateOFBirth: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
};

export type StudentMethods = {
  isUserExists(id: string): Promise<Student | null>;
};

export type StudentModelInstance = Model<
  Student,
  Record<string, never>,
  StudentMethods
>;
