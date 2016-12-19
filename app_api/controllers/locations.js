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
    if (req.params && req.params.locationid) {
        Loc.findById(req.params.locationid)
            .exec(function(err, location){
                if (!location) {
                    sendJsonResponse(res, 404, {"message": "locationid not found"});
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                sendJsonResponse(res, 200, location);
            });
    } else {
        sendJsonResponse(res, 404, {"message": "No locationid in request"});
    }
};

module.exports.locationsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.locationDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
