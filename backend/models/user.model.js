import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
    enum: ["user"], // This field is used to identify the sender of the message means sencder jo hai wo fix person hona chaiye listed me se  like idher role based access de skte
  },
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

//  variable name [User] =  model name [ User ] it can be differ but best practice is keep same
const User = mongoose.model("User", userSchema);
export default User;
