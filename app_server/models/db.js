/**
 * Created by michaelbotes on 2016/11/09.
 */
var mongoose = require( 'mongoose' );
require('./locations');

var dbURI = 'mongodb://localhost/loc8r';
if (process.env.NODE_ENV === 'production') {
    // dbURI = 'mongodb://heroku_fv83rrb5:vi1064gdu4niunlpje0buj9tqj@ds151137.mlab.com:51137/heroku_fv83rrb5';
    dbURI = process.env.MONGOLAB_URI;
}
mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
   console.log('Mongoose connected to: ' + dbURI);
});

mongoose.connection.on('error', function(err) {
   console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
   console.log('Mongoose disconnected');
});



var gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function (){
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

process.once('SIGUSR2', function(){
   gracefulShutdown('nodemon restart', function(){
     process.kill(process.pid, 'SIGUSR2');
   });
});

process.on('SIGINT', function(){
   gracefulShutdown('app termination', function() {
       process.exit(0);
   });
});

process.on('SIGTERM', function(){
    gracefulShutdown('Heroku app shutdown', function() {
        process.exit(0);
    });
});



