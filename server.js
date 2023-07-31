const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.sendStatus(500);
  //res.status(500).send('some text')
  //res.status(500).json({message:'error'})
  //res.download("server.js")
  console.log("Here");
});

app.listen(3000);
