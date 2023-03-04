const Course = require("../models/Course");
const { mongooseToObject } = require('../../util/mongoose')


class SearchController {

    // [GET] /course/:slug(show)
    show(req, res, next) {
        console.log("Slug ne tk ngu:",req.params.slug)
        Course.findOne({slug : req.params.slug})
        .then((course) => res.render('courseDetail', {course : mongooseToObject(course)}))
            // .then((course) => res.json(course))
            .catch(next)
    }
    // [GET] /course/create
    create(req, res, next) {
        res.render('create')
    }

    //[POST] /course/store
    store(req, res, next){
        const course = new Course(req.body)
        course.save()
            .then(() => res.redirect('/course'))

    }

}

module.exports = new SearchController();
