import express, { Express, Request, Response } from "express";


const Router = express.Router();

Router.get("/", (req: Request, res: Response) => {
  res.send("<h1>OK </h1>");
});

Router.post("/test", (req: Request, res: Response) => {
  fetch(`https://api.telegram.org/${process.env.BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: "oke",
      chat_id: 2004808521,
    }),
  });
});

export { Router as testRouter };
