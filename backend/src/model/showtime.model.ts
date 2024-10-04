import mongoose from "mongoose";
const Schema = mongoose.Schema;

const showtimeSchema = new Schema({
  movieId: {
    type: Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  availableSeats: {
    type: Number,
    required: true,
    default: 100,
  },
  totalSeats: {
    type: Number,
    required: true,
    default: 100,
  },
});

export const Show = mongoose.model("Show", showtimeSchema);
