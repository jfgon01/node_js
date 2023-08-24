import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routesV1 from './routes/v1';
import { PrismaClient } from '@prisma/client';

const prisma =new PrismaClient();
dotenv.config();

//iniciamos una instacio de express

const app= express();
const corsOption ={
    origin: '*'
}


app.use(cors(corsOption));
app.use(express.json());
/* Se asocian todas las rutas de la API */
app.use("/api/v1", routesV1);



export default app;