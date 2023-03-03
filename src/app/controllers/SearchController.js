class SearchController {
    // [GET] /search
    index(req, res) {
        res.render('search');
    }

    // [GET] /search/:slug(show)
    show(req, res) {
        res.send('show ne tk ngu');
    }
}

module.exports = new SearchController();
