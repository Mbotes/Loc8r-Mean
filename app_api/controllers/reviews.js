/**
 * Created by michaelbotes on 2016/11/20.
 */
var mongoose = require('mongoose');
var Loc = mongoose.model('location');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.reviewsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.reviewsReadOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.reviewsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.reviewsDelete = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
