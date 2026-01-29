import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/telegram", async (req, res) => {
  try {
    const { text } = req.body;

    const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    const tg = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML",
      }),
    });

    const data = await tg.json();
    if (!data.ok) return res.status(400).json(data);

    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false });
  }
});

app.listen(5050, () => console.log("http://localhost:5050"));