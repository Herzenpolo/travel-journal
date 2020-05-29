const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const index = require("./routes/index");
const app = express();
const passport = require("./config/passport");
const journalRoutes = require("./routes/journalRoutes");
const bodyParser = require("body-parser");
require('dotenv').config();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const auth = require ("./routes/auth")
const imageUrls = require ("./routes/file-upload-routes")



const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/travel-journal'
console.log('Connecting DB to ', MONGODB_URI)

mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));


  app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: "secret",
      cookie: { maxAge: 1000 * 60 * 60 }
    })
  );


app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://adoring-curran-da4c60.netlify.app"], //Swap this with the client url
  }) 
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


app.use("/", index);
app.use("/", journalRoutes);
app.use("/", auth)
app.use("/", imageUrls)

app.listen(process.env.PORT || 5000);
