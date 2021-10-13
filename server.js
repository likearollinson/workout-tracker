// import required modules
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

//set up port to be used on local server
const PORT = process.env.PORT || 3000;

// allow express to be used when 'app' variable called
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

app.use(require('./routes/api.js'));
app.use(routes);

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
