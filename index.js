const express = require('express');
const mongoose = require('mongoose');

const Auction = require('./models/auction.model');
console.log(Auction);

const PORT = 5000;
const MONGO_DB_URI = 'mongodb+srv://kruthan08:lKTr7TfSp7VIC1f4@auction.cxp8n.mongodb.net/auction_system';

const app = express();
app.use(express.json());

mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error: ", err);
  });

app.get('/', (req, res) => {
  res.send('Hello! The auction system is working.');
});

app.get('/auction', (req, res) => {
  console.log("Auction GET request is called");
  Auction.find()
    .then(auctions => res.json(auctions))
    .catch(err => res.status(400).json('Error: ' + err));
});
//http://127.0.0.1:5000/auction/add
app.post('/auction/add', (req, res) => {
  console.log("Auction has been added");
  const newAuction = new Auction(req.body);
  newAuction.save()
    .then(() => res.json("Auction added"))
    .catch(err => res.status(400).json("Error: " + err));
});

app.listen(PORT, () => {
  console.log(`Listening at http://127.0.0.1:${PORT}`);
});
app.post('/signup', (req, res) => {
  console.log("info is added");
  const newSignUp = new SignUp(req.body);
  newSignUp.save()
      .then(() => res.json("data added "))
      .catch(err => res.status(400).json("Error: " + err));
});

