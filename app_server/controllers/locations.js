/**
 * Created by michaelbotes on 2016/11/06.
 */

/* GET 'home' page */
module.exports.homelist = function (req, res) {
    res.render('locations-list', {title: 'Home'});
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {title: 'location info'});
};


/* GET 'Add review' page */
module.exports.addReview = function (req, res) {
    res.render('location-review-form', {title: 'Add review'});
};