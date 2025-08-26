import mongoose from "mongoose";

const botSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

// ab ye above code shcema hai isko module me convert krenge for use in other parts of the application

//  variable name [Bot] =  model name [ Bot ] it can be differ but best practice is keep same
const Bot = mongoose.model("Bot", botSchema);
export default Bot;
