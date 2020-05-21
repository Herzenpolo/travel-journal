const express = require("express");
const router = express.Router();
const Journal = require('../models/journalEntry')


router.post("/journalEntry", (req, res, next) => {
   Journal.create(req.body).then((journals) => {   
    res.json(journals)
   })
  });

  router.get("/journalEntry", (req, res, next) => {
    Journal.find().then((journalFromDb) => {
      res.json({ journal : journalFromDb });
    });
  });

  router.get("/journalEntry/:id", (req, res, next) => {
    Journal.findById(req.params.id).then((journalFromDb) => {
      res.json({ journal : journalFromDb });
    });
  });

  module.exports = router;