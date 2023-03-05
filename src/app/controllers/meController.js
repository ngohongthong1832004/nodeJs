const Course = require("../models/Course");
const { multipleMongooseToObject,mongooseToObject } = require('../../util/mongoose')


class MeController {

    // [GET] /me/my-course/:slug(show)
    show(req, res, next) {
        Course.find({})
        .then((course) => res.render('myCourse', {course : multipleMongooseToObject(course)}))
        .catch(next)
    }
    //[GET] /me/bin
    showBin(req, res, next) {
        Course.findDeleted({})
        .then((course) => res.render('myBin', {course : multipleMongooseToObject(course)}))
        .catch(next)
    }
    // [GET] /my-course/edit/:slug
    edit(req, res, next) {
        Course.findById(req.params.id)
        .then((course) => res.render('editCourse', {course : mongooseToObject(course)}))
        .catch(next) 
    }

    //[PUT] /my-course/:id
    update(req, res, next) {
        Course.updateOne({_id : req.params.id}, req.body)
        .then(res.redirect("/me/my-course"))
        .catch(next)
    }

    //[DELETE] /me/my-course/delete/:id
    delete(req, res, next){
        Course.delete({_id : req.params.id})
        .then(res.redirect("back"))
        .catch(next)
    }

    //[PATCH] /me/my-course/:id:/restore
    restore(req, res, next){
        Course.restore({_id : req.params.id})
        .then(res.redirect("back"))
        .catch(next)
    }

    //[DELETE] /me/my-course/delete/force/:id
    deleteForce(req, res, next){
        Course.deleteOne({_id : req.params.id})
        .then(res.redirect("back"))
        .catch(next)
    }

}

module.exports = new MeController();
