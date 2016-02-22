'use strict';

const MongoClient = require('mongodb').MongoClient
const format = require('util').format;
const config = require('./config.json');

const port = config.port || '27017';

let connectionString = `mongodb://${config.host}:${port}/${config.database}`

if (config.username && config.password) {
	connectionString = `mongodb://${config.username}:${config.password}@${config.host}:${port}/${config.database}`
}

MongoClient.connect(connectionString, function (err, db) {
	if (err) {
			console.log(err);
			process.exit(1);
		} else {
			console.log("successfully connected to the database");
	}
	db.close();
});
