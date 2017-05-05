'use strict';

module.exports = {
	app: {
		title: 'Test Node hapi',
		description: 'Test node hapi application',
		keywords: 'mongodb, hapi, angularjs, node.js, mongoose, passport'
	},
	port: process.env.PORT || 3000,	
	log: {
		// Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
		format: 'combined',
		// Stream defaults to process.stdout
		// Uncomment to enable logging to a log on the file system
		options: {
			stream: 'access.log'
		}
	}
};
