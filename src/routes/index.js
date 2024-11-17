const newRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newRouter);

    app.use('/home', siteRouter);
}

module.exports = route;
