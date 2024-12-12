import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

const app: Application = express();
app.use(express.json());
app.use(cors());

// Mount the main router at `/api/v1`
app.use('/api/v1', router);

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
