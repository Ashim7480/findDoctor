const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose.connect(
  `mongodb+srv://ashim:ashim@cluster0.bnb3a84.mongodb.net/findYourDoctor?retryWrites=true&w=majority`
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Connected to MongoDB successfully");
});

connection.on("error", (error) => {
  console.log("Error in MongoDB connection", error);
});

module.exports = mongoose;
