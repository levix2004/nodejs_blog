class NewsController {
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('New Details');
    }
}

module.exports = new NewsController();
