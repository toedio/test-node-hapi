var init = require('./config/init')(),
	config = require('./config/config'),
	mongoose = require('mongoose'),
	chalk = require('chalk'),
    Hapi = require('hapi'),
    path = require('path');
    server = new Hapi.Server();


//start database
var db = mongoose.connect(config.db.uri, config.db.options, function(err) {
	if (err) {
		console.error(chalk.red('Could not connect to MongoDB!'));
		console.log(chalk.red(err));
	}
});
mongoose.connection.on('error', function(err) {
	console.error(chalk.red('MongoDB connection error: ' + err));
	process.exit(-1);
	}
);

//start models
config.getGlobbedFiles('./app/models/**/*.js').forEach(function(modelPath) {
	require(path.resolve(modelPath));
});

server.connection( {
    host: config.host || 'localhost',
    port: config.port || 3000
});

//require routes
server.route(require('./app/routes/user.server.routes.js'));

server.log(['error', 'database', 'read']);

server.start(function(err) {
    if (err)
        throw err;
    
    // Logging initialization
    console.log('--');
    console.log(chalk.green(config.app.title + ' application started'));
    console.log(chalk.green('Environment:\t\t\t' + process.env.NODE_ENV));
    console.log(chalk.green('Port:\t\t\t\t' + config.port));
    console.log(chalk.green('Database:\t\t\t' + config.db.uri));
    console.log('--');
});