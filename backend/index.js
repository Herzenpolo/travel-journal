const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const index = require("./routes/index");
const app = express();
const passport = require("./config/passport");
const journalRoutes = require("./routes/journalRoutes");
const bodyParser = require("body-parser");

mongoose
  .connect("mongodb://localhost:27017/travel-journal", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

// app.use(passport.initialize());
// app.use(passport.session());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "add netlify link"], //Swap this with the client url
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/", index);
app.use("/", journalRoutes);

app.listen(process.env.PORT || 5000);
