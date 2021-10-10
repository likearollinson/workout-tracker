// import mongoose
const mongoose = require('mongoose');

// initialize mongoose schema
const Schema = mongoose.Schema;

// create the model
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: {
        type: {
            type: String,
            trim: true,
            required: 'Please enter the type of exercise'
        },
        name: {
            type: String,
            trim: true,
            required: 'Please enter the name of the exercise'
        },
        duration: {
            type: Number,
            required: 'Please enter the duration of the exercise'
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    },
})

// creates the model from the above schema using mongoose's model method
const Workout = mongoose.model('Workout', WorkoutSchema);

// exports the Workout model
module.exports = Workout