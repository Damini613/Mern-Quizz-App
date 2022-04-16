const express = require("express");

const app = express();

const cors = require("cors");

const PORT = 8000;

const connectDB = require("./config/db");

const router = require("./routes/quizz");

connectDB;

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(router)

app.listen(PORT, () => {
  console.log(`m listening on Port ${PORT}`);
});
