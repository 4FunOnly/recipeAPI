const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    menu: {
      type: String,
      required: true,
      unique: false,
    },
    cooking_time: {
      type: String,
      required: true,
      unique: false,
    },
    kcal: {
      type: Number,
      required: true,
      unique: false,
    },
    category: {
      type: String,
      required: true,
      unique: false,
    },
    ingredient: {
      type: String,
      required: true,
      unique: false,
    },
    recipe: {
      type: String,
      required: true,
      unique: false,
    },
    // ratings : [
    //   {
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : "Rating"
    //   },
    // ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipes", recipeSchema);