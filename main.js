'use strict';

const MongoClient = require('mongodb').MongoClient
const format = require('util').format;
const config = require('./config.json');

let connectionString = `mongodb://${config.host}:${config.port}/${config.database}`

if (config.username && config.password) {
	connectionString = `mongodb://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`
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
