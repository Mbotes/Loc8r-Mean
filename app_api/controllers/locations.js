/**
 * Created by michaelbotes on 2016/11/20.
 */
var mongoose = require('mongoose');
var Loc = mongoose.model('location');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.locationsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.locationsListByDistance = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.locationReadOne = function (req, res) {
    Loc.findById(req.params.locationid)
        .exec(function(err, location){
           sendJsonResponse(res, 200, location);
        });
};
module.exports.locationsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.locationDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
