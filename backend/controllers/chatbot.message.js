// ab chat bot ko logic de rhe

import User from "../models/user.model.js";
import Bot from "../models/bot.model.js";
// user se msg lena

export const Message = async (req, res) => {
  try {
    const { text } = req.body; // body se msg diconstruct krna
    console.log(text);
    if (!text?.trim()) {
      // initial and last spaces htana  aur yadi msg nhi hai to error dena
      return res.status(400).json({ error: "Text cannot be empty" });
    }

    const user = await User.create({
      sender: "user",
      text,
    });
    // bot can response with this all text aur que ans
    const botResponses = {
      "how are you": "I am fine, thank you!",
      hii: "Hii how can i help you",
      hello: "Hello! How can I assist you today?",
      "what is your name": "my name is dhaval.",
      "kya sbji khaya": "aaloo chana",
    };
    // normali the text jo user add krega taki acha se match ho ske
    const normalizedText = text.toLowerCase().trim();

    // bot response krega
    const botResponse =
      botResponses[normalizedText] || "I am sorry, I don't understand that!!";

    //ab bot response bnayega based on text
    const bot = await Bot.create({
      text: botResponse,
    });

    return res
      .status(200)
      .json({ userMessage: user.text, botMessage: bot.text });
  } catch (error) {
    console.error("Error processing message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// export  message export default Message;
