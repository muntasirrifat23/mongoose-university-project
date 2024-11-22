// import { Schema, model, connect } from 'mongoose';

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
  name: Name;
  email: string;
  gender: 'male' | 'female';
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-';
  dateOFBirth: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
};
