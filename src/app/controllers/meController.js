const Course = require("../models/Course");
const { multipleMongooseToObject,mongooseToObject } = require('../../util/mongoose')


class MeController {

    // [GET] /me/my-course/:slug(show)
    show(req, res, next) {
        Promise.all([Course.find({}),Course.countDocumentsDeleted({})])
        .then(([course, deleteCount]) => res.render('myCourse', {
            deleteCount,
            course : multipleMongooseToObject(course)
        }))
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

    //[POST] /me/my-course/handle-form-actions
    handleForm(req, res, next){
        // res.json(req.body)
        switch(req.body.actions){
            case 'delete' : {
                console.log("co do day khong tori oi")
                // $in loop all item to delete all item in arr
                Course.delete({_id :{ $in : req.body.courseId }})
                    .then(res.redirect("back"))
                    .catch(next)
                break;
            }
            default :{
                res.redirect("back")
                break
            }
        }
    }
}

module.exports = new MeController();
