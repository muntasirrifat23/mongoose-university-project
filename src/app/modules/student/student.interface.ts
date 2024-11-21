// import { Schema, model, connect } from 'mongoose';

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
  name: {
    fastName: string;
    middleName: string;
    lastName: string;
  };
  email: string;
  gender: 'male' | 'female';
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-';
  dateOFBirth: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
};
