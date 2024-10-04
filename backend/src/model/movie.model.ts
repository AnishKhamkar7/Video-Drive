import mongoose from "mongoose";
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Movie = mongoose.model("Movie", movieSchema);
