/**
 * Created by michaelbotes on 2016/11/06.
 */

/* GET 'about' page */
module.exports.about = function(req, res) {
  res.render('index', {title: 'About'});
};