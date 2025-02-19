import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { appRouter } from "./route";
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(cors());

app.use(express.json());

app.use(appRouter);

app.listen(PORT, () => console.log(`Running on ${PORT}`));
