const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database CONNECTED"))
  .catch((err) => console.log("Error connecting to database.", err));

module.exports = mongoose.connection;
