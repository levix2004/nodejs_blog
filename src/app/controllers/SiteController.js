const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');


class SiteController {
    index(req, res, next) {
        // try {
        //     const courses = await Course.find({});
        //     res.json(courses);
        // }catch (err) {
        //     res.status(404).json({error: 'ERROR'});
        // }
        Course.find({})
            .then(courses =>{
                res.render('home',{
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(error => next(error));
        // Course.find({}, function(err, courses) {
        //     if(!err) res.json(courses);
        //     else res.status(404).json({error: 'ERROR'});
        // });
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
