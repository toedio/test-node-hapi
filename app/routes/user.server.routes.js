'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller');

module.exports = [
	{
		method: 'POST',
		path: '/auth/signup',
		handler: users.signup
	}
]