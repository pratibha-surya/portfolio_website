
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import {connectDB} from './config/db.js';
import ProjectRoutes from "./routes/ProjectRoutes.js"



dotenv.config()


connectDB()


const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(
  cors({
    origin: ['http://localhost:5173', 'https://portfolio-website-wqqs.onrender.com'],
    credentials: true,
  })
);









app.use(express.json()); 

// Routes
app.use('/api/v1/auth', ProjectRoutes);
app.use('/api/v1/project',ProjectRoutes)



app.use(express.static(path.join(__dirname, '../frontend/dist')));

 app.use("/", (req, res) => {
   res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
 });


// Start server
const PORT = process.env.PORT|| 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


