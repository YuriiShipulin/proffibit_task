var User = require('../models/user');

module.exports = function () {

    this.get = function (req, res, next) {
        User
            .find({}, function (err, users) {
                if (err) {
                    err.status = 400;

                    return next(err);
                }
                res.status(200).send(users);
            });
    };

    this.getById = function (req, res, next) {
        var id = req.params.id;

        User
            .findById(id, function (err, user) {
                if (err) {
                    err.status = 400;
                    err.message = 'Bad params: ' + id;


                    return next(err);
                }

                if (user) {
                    res.status(200).send(user);
                } else {
                    res.status(403).send('No such user: ' + req.params.id);
                }
            });
    };

    this.create = function (req, res, next) {
        var body = req.body;
        var user = new User(body);

        user.save(function (err, user) {
            if (err) {
                return next(err);
            }

            res.status(200).send(user);
        });
    };

    this.update = function (req, res, next) {

        var id = req.params.id;
        var body = req.body;

        User.findByIdAndUpdate(id, body, {new: true}, function (err, user) {
            if (err) {
                return next(err);
            }

            res.status(200).send(user);
        });
    };

    this.remove = function (req, res, next) {

        var id = req.params.id;

        User.findByIdAndRemove(id, function (err, user) {
            if (err) {
                return next(err);
            }

            res.status(200).send(user);
        });
    };
};