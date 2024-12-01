import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/User/user.router';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();
app.use(express.json());
app.use(cors());

// app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', router);

const test = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', test);

// Error Handling Middleware
app.use(globalErrorHandler);

// Not Found
app.use(notFound);

export default app;
