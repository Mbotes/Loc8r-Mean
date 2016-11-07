/**
 * Created by michaelbotes on 2016/11/06.
 */

/* GET 'home' page */
module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work near you!'
        },
        locations: [{
            name: 'Arcade Fire',
            rating: '3',
            distance: '50m',
            address: '12 Kensington Street, Cape Town',
            facilities: ['Food','Late Times', 'Alcohol', 'Bar']
        },{
            name: 'Moon Drops',
            rating: '4',
            distance: '1200m',
            address: '12 Low Street, Durbanville',
            facilities: ['Food','Late Times', 'Alcohol', 'Bar']
        },{
            name: 'White Lies',
            rating: '5',
            distance: '250m',
            address: '14 Bree Street',
            facilities: ['Food','Late Times', 'Alcohol', 'Bar']
        },{
            name: 'I hate Dan',
            rating: '1',
            distance: '0m',
            address: '14 Woodstock Street',
            facilities: ['Regret','Hate', 'Self-loathing', 'Pretty cool guy']
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {title: 'location info'});
};


/* GET 'Add review' page */
module.exports.addReview = function (req, res) {
    res.render('location-review-form', {title: 'Add review'});
};