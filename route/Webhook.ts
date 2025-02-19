import express from "express";
import { Request, Response } from "express";
import axios from "axios";

const Route = express.Router();

// Token của bot Telegram
const BOT_TOKEN = process.env.BOT_TOKEN;
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

Route.post("/webhook", async (req: Request, res: Response) => {
  const { message } = req.body;

  if (message && message.text) {
    const chatId = message.chat.id;
    const text = "Chào mừng bạn đến với Mini App!";

    // Gửi tin nhắn phản hồi
    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: text,
    });
  }

  res.status(200).send("OK");
});

export { Route as webhookRoute };
