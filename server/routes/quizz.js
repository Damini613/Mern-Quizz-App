const express = require("express");


const router = express.Router();
const Quizz = require("../models/quizzSchema");

router.get("/get", async (req, res) => {
  try {
    const data = await Quizz.find();
    if (data) {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/get/:id", async (req, res) => {
  try {
  
    const _id = req.params.id
    const data = await Quizz.findById(_id)
    if (data) {
    
      res.status(200).json(data);
    }
  } catch (error) {
    console.log('error on get',error)
    res.status(500).json({ error: error });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await Quizz.findById(_id);
    if (data) {
      const resp = await Quizz.findByIdAndDelete(_id);
      res.status(200).json({ message: "delete success" });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post("/post", async (req, res) => {
  try {
    const body = req.body;
    const quizzData = new Quizz({
      question: body.question,
      a1: body.a1,
      a2: body.a2,
      a3: body.a3,
      a4: body.a4,
      correct: body.correct,
    });

    await quizzData.save();

    

    res.status(201).json({ message: "post/created success" });
  } catch (error) {
    console.log('error',error)
    res.status(500).json({ error: error });
  }
});

router.put("/put/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const body = req.body;
    const data = await Quizz.findById(_id);
    if (data) {
      const resp = await Quizz.findByIdAndUpdate(_id, {
        question: body.question,
        a1: body.a1,
        a2: body.a2,
        a3: body.a3,
        a4: body.a4,
        correct: body.correct,
      });

      res.status(200).json({ message: "updated/put success" });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router