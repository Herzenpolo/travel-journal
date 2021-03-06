const express = require("express");
const router = express.Router(); 
const Journal = require('../models/journalEntry')



router.post("/journalEntry", (req, res, next) => {
   Journal.create(req.body).then((journals) => {   
    res.json(journals)
   })
  });

  router.get("/journalEntry", (req, res, next) => {
    console.log(req.query.searchInput, req.params)
    Journal.find({$or:[{country : req.query.searchInput}, {city:req.query.searchInput}, {location:req.query.searchInput}]}).then((journalFromDb) => {
      console.log(journalFromDb, "testing")
      res.json({ journal : journalFromDb });
    });
  });

  router.get("/journalEntry/:id", (req, res, next) => {
    Journal.findById(req.params.id).then((journalFromDb) => {
      console.log(journalFromDb, "Hello")
      res.json({ journal : journalFromDb });
    });
  });

  router.post("/journalEntry/update", (req, res, next) => {
    console.log(req.body, 'what exactly is this')
    Journal.findByIdAndUpdate(req.body._id, {city : req.body.city, location:req.body.location, rating:req.body.rating, review:req.body.review, country:req.body.country}).then((journalFromDb) => {
      console.log(journalFromDb, "what is going on here")
      res.json(journalFromDb)
    })
   });


  module.exports = router;