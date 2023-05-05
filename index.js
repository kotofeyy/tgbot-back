const TelegramBot = require("node-telegram-bot-api");
import { token } from "./token";

const url = "https://9e34-5-44-169-120.ngrok-free.app";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text === "/start")
    await bot.sendMessage(chatId, "Погнали!", {
      reply_markup: {
        keyboard: [[{ text: "Открыть", web_app: { url } }]],
      },
    });
});
