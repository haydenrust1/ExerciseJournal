const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now(),
    },
    exercises: [
        {
            type: {
                type: String,
                required: [true, "Please input exercise type."],
            },
            name: {
                type: String,
                required: [true, "Please input exercise name."],
            },
            duration: {
                type: Number,
                min: [0, "Enter a number greater than zero please."],
                required: [true, "Please input exercise duration."],
            },
            weight: {
                type: Number,
                min: [0, "Enter a number greater than zero please."],
            },
            reps: {
                type: Number,
                min: [0, "Enter a number greater than zero please."],
            },
            sets: {
                type: Number,
                min: [0, "Enter a number greater than zero please."],
            },
            distance: {
                type: Number,
                min: [0, "Enter a number greater than zero please."],
            },
        },
    ],
},
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
