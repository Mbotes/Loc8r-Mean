/**
 * Created by michaelbotes on 2016/11/06.
 */

/* GET 'home' page */
module.exports.homelist = function (req, res) {
    res.render('index', {title: 'Home'});
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('index', {title: 'location info'});
};


/* GET 'Add review' page */
module.exports.addReview = function (req, res) {
    res.render('index', {title: 'Add review'});
};