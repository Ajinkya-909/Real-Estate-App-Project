import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const listing = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    regularPrize: {
      type: Number,
      require: true,
    },
    discountPrize: {
      type: Number,
      require: true,
    },
    bathRooms: {
      type: Number,
      require: true,
    },
    bedRooms: {
      type: Number,
      require: true,
    },
    furnished: {
      type: Boolean,
      require: true,
    },
    parking: {
      type: Boolean,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    offer: {
      type: Boolean,
      require: true,
    },
    imageUrls: {
      type: Array,
      require: true,
    },
    userRef: {
      type: String,
      require: true,
    },
  },
  { Timestamp: true }
);

const Listing = mongoose.model("Listing", listing);

export default Listing;
