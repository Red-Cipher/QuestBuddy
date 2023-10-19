import dotenv from 'dotenv';
dotenv.config({path: "/home/red-cipher/Desktop/QuestBuddy - Folder/QuestBuddy/backend/db/.env"});
import express from 'express';
import Router from './routes/RouteMaster';
import cors from 'cors';
console.log("Path to .env: ", './db/.env');
console.log("PORT from .env:", process.env.PORT);
console.log(process.env);


// Create a new express application instance
const app: express.Application = express();

// The port the express app will listen on
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// Apply cors
app.use(cors());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Parse JSON
app.use(express.json());

// Attach the routers
app.use('/api', Router);

// Define Route
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});

// Start Express server
app.listen(port, () => {
  console.log(`Express server started on http://localhost:${port}`);
});