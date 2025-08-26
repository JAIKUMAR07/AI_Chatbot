import express from "express";

import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
