require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoute = require("./routes/loginRoute");
const hotelRoute = require("./routes/hotelRoute");

const dbURI = "mongodb://localhost/users";
app.use(express.json());
app.use("/api/", authRoute);
app.use("/api/",hotelRoute);

mongoose.connect(process.env.DB_URL || dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("db connected successfully");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started: 3000");
});
