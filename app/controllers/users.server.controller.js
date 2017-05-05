'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	User = mongoose.model('User');

/**
 * Signup
 */
exports.signup = function(req, res) {

	// For security measurement we remove the roles from the req.body object
	delete req.payload.roles;

	// Init Variables
	var user = new User(req.payload),
	message = null;

	user.displayName = user.firstName + ' ' + user.lastName;

	
	user.save(function(err) {
		if (err)
			return res(new Error(err));
		else
			res(user);				
		
	});
};