/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var dsConfig = require('../datasources.local.js');
var path = require('path');

module.exports = function(app) {
  var User = app.models.user;
  
  

  //login page
  app.get('/', function(req, res) {
    var credentials = dsConfig.myEmailDataSource.transports[0].auth;
    res.render('login', {
      email: credentials.user,
      password: credentials.pass
    });
  });

  //verified
  app.get('/verified', function(req, res) {
    res.render('verified');
  });

  //log a user out
  app.get('/logout', function(req, res, next) {
    if (!req.accessToken) return res.sendStatus(401);
    User.logout(req.accessToken.id, function(err) {
      if (err) return next(err);
      res.redirect('/');
    });
});
};