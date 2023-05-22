class NewsController {
    index(req, res) {
        res.render('news');
    }
    //[GET] /news/:slug
    show(req, res) {
        res.send('â');
    }
}

module.exports = new NewsController();
