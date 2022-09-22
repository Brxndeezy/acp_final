
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    //column creation in the table
    fname: {
      type: String,
      required: [true, "Please Provide a first name"],
      maxlength: 20,
    },

    lname: {
      type: String,
      required: [true, "Please Provide a last name"],
      maxlength: 30,
    },

    email: {
      type: Email,
      required: [true, "Please Provide an email address"],
      unique: true,
    },

    username: {
      type: String,
      required: [true, "Please Provide a username"],
      maxlength: 30,
      unique: true,
    },

    password: {
      type: Password,
      required: [true, "Please Provide a password"],
      maxlength: 40,
    },
  },
  {
    timestamps: true, // for date and time
  }
);

const Users = models.Users || model("users", UserSchema);

export default Users;
