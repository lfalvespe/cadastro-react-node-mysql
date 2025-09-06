const express = require("express");
//database
const conn = require("./db/conn");
//routes imports
const userRoutes = require('./routes/userRoutes')
//cors import
const cors = require('cors')

const app = express();

app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({
    extended: true,
}))

app.use(
  cors({
    origin: '*'
  })
)

app.use(express.json())

app.use('/users', userRoutes)

//routes
app.get("/", (req, res) => res.send("Cadastro Node MySQL"));

conn
  .sync()
  .then(() => {
    app.listen(3000, () => console.log("Server ready on port 3000."));
  })
  .catch((err) => console.log(err));

  module.exports = app;
