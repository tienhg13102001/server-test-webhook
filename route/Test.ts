import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const Router = express.Router();

Router.get("/", (req: Request, res: Response) => {
  res.send("<h1>OKh1>");
});

export { Router as testRouter };

