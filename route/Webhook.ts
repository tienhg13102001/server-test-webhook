import express from "express";
import { Request, Response } from "express";
import axios from "axios";
import "dotenv/config";

const Route = express.Router();

// Token của bot Telegram
const BOT_TOKEN = process.env.BOT_TOKEN;
const TELEGRAM_API = `https://api.telegram.org/${BOT_TOKEN}`;

Route.post("/webhook", async (req: Request, res: Response) => {
  const { chat_id } = req.body;
  const text = "Chào mừng bạn đến với Mini App!";

  const resAPI = await axios.post(`${TELEGRAM_API}/sendMessage`, {
    chat_id,
    text,
  });

  res.status(200).json(resAPI.data);
});

export { Route as webhookRoute };
