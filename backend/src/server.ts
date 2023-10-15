import express from 'express';
import taskRouter from './routes/taskRouter';
import dotenv from 'dotenv';
dotenv.config();

// Create a new express application instance
const app: express.Application = express();

// The port the express app will listen on
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// Connect to Public directory using static middleware
app.use(express.static('public'));

// Parse URL encoded bodies
app.use(express.urlencoded({ extended: true }));

//Parse JSON
app.use(express.json());

// Define Route
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});

app.use('/tasks', taskRouter);

//Start Express server
app.listen(port, () => {
  console.log(`Express server started on http://localhost:${port}`);
});