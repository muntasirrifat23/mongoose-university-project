import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/studen.route';
import { UserRoutes } from './app/modules/User/user.router';

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a); 
});

export default app;
