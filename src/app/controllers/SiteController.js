const Course = require("../models/Course");
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
  // [GET] /home
  index(req, res) {
    Course.find({})
      .then((course) => {
        res.render('home',{
            course : multipleMongooseToObject(course),
        });
      })
      .catch((err) => {
        res.status(400).json({ error: "ERROR..!!!" });
      });
  }
}

module.exports = new SiteController();
