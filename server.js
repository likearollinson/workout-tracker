// import required modules
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//set up port to be used on local server
const PORT = process.env.PORT || 3000;

const Workout = require("./workoutModel.js");

// allow express to be used when 'app' variable called
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

// Routes from example application

// // Route to post our form submission to mongoDB via mongoose
// app.post("/submit", ({ body }, res) => {
//     // Create a new user using req.body
//     const user = new User(body);
//     user.setFullName();
//     user.lastUpdatedDate();

//     User.create(user)
//         .then(dbUser => {
//             // If saved successfully, send the the new User document to the client
//             res.json(dbUser);
//         })
//         .catch(err => {
//             // If an error occurs, send the error to the client
//             res.json(err);
//         });
// });

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
