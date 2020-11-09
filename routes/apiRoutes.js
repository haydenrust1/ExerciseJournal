const db = require('../models/Workout');

module.exports = function (app) {
    app.get('/api/workouts', function (req, res) {
        db.Workout.find({})
            .then(function (dbWorkouts) {
                res.json(dbWorkouts);
            });
    });

    app.get('/api/workouts/range', function (req, res) {
        db.Workout.find({})
            .then(function (dbWorkouts) {
                res.json(dbWorkouts);
            });
    });


    app.put('/api/workouts/:id', function (req, res) {
        db.Workout.updateOne({ _id: req.params.id }, { exercises: req.body.exercises })
            .then(function (dbWorkouts) {
                res.json(dbWorkouts);
            })
    });

    app.post('/api/workouts', function (req, res) {
        db.Workout.create(req.body)
            .then(function (dbWorkouts) {
                res.json(dbWorkouts);
            })
    });

}