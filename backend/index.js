import express from "express";

import dotenv from "dotenv";
import mongoose from "mongoose";
import chatbotRoutes from "./routes/chatbot.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
// data base connection code

mongoose
  .connect(process.env.MOGO_URI)
  .then(() => {
    console.log("connected to mongo db");
  })
  .catch((error) => {
    console.log("error connecting to mongo db", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// giving prefix of the route    then remaining is there in charbotRoutes
// mens saamne ka mila to chatboutRoutes me chala jayega
// ab usdher aur bhi alg alg route ho skte jo remaining match krega wahi cal krega
// examle chatboutRoutes me hi  /history , /message ho skta to jo mathc krega wahi execure hoga
app.use("/bot/v1/", chatbotRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
