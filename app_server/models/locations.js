/**
 * Created by michaelbotes on 2016/11/10.
 */
var mongoose = require ('mongoose');

var locationsSchema = new mongoose.schema({
    name: String,
    address: String,
    rating: {type: Number, "default": 0},
    facilities: [String]
});