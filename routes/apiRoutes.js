const db = require('../models/Workout');

module.exports = function (app) {
    app.get('/api/workouts', function (req, res) {
        db.find({})
            .sort({
                _id: -1
            })
            .limit(1)
            .then(function (dbWorkouts) {
                res.json(dbWorkouts);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.get('/api/workouts/range', function (req, res) {
        db.find({})
            .then(function (dbWorkouts) {
                res.json(dbWorkouts);
            })
            .catch((err) => {
                res.json(err);
            });
    });


    app.put('/api/workouts/:id', function (req, res) {
        db.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { exercises: req.body } },
            { new: true }
        )
            .then(function (dbWorkouts) {
                res.json(dbWorkouts);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.post('/api/workouts', function (req, res) {
        db.create(req.body)
            .then(function (dbWorkouts) {
                res.json(dbWorkouts);
            })
            .catch((err) => {
                res.json(err);
            });
    });

}