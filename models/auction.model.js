// import mongoose from "mongoose";
const mongoose = require('mongoose');

const auctionSchema = mongoose.Schema({
     title: {
        type: String,
        required: [true, "please enter title"],
      },
      description: {
        type: String,
        required: [true, "please enter Desc"],
      },
      link: {
        type: String,
        required: false,
        default: 0,
      },
      img: {
        type: String,
        required: false,
        default: 0,
      },
    },{
      Timestamp: true,
    }
);

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;
