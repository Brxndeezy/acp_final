import { Schema, model, models } from "mongoose";

const ExpenseSchema = new Schema(
  {
    //column creation in the table
    eName: {
      type: String,
      required: [true, "Please Provide expense name"],
      maxlength: 30,
    },

    eType: {
      type: String,
      required: [true, "Please Provide expense type"],
      maxlength: 30,
    },

    ePrice: {
      type: Number,
      required: [true, "Please Provide expense price"],
    },

    createDate: {
      type: date,
      required: [true, "Date created"],
      timeCreated: Date,
    },

    createUser: {
      type: String,
      required: [true, "Created by"],
      maxlength: 40,
    },
  },
  {
    timestamps: true, // for date and time
  }
);

const Expenses = models.Expenses || model("Expenses", ExpenseSchema);

export default Expenses;
