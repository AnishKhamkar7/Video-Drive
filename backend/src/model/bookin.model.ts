import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  showtimeId: {
    type: Schema.Types.ObjectId,
    ref: "Showtime",
    required: true,
  },
  seatsBooked: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  bookingTime: {
    type: Date,
    default: Date.now,
  },
});

export const Booking = mongoose.model("Booking", bookingSchema);
