const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect("mongodb+srv://frankadawd:<frank091011>@cluster0.qj3mh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("[✅ DataBase] Connected!");
});
module.exports = mongoose;
