import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// Routes
import UserRouter from './routes/index.js';

// Constants
const PORT = process.env.PORT;

const app = express()

app.use(cors())

app.use(express.json())

app.use('/', UserRouter)

app.listen(PORT, () => console.log(`Port listening on: ${PORT}`))