const searchRouter = require('./search');
const siteRouter = require('./site');
const courseRouter = require('./course')

const route = (app) => {
    app.use('/search', searchRouter);

    app.use('/course', courseRouter);

    app.use('/', siteRouter);
};

module.exports = route;
