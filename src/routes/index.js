const searchRouter = require('./search');
const siteRouter = require('./site');

const route = (app) => {
    app.use('/search', searchRouter);

    app.use('/', siteRouter);
};

module.exports = route;
