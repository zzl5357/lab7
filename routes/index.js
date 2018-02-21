var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
  	res.render('index', projects);
};