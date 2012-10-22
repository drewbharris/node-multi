// This is an example config file for node-multi to load remote files
// Rename this to config.js

var config = {};

config.useRemoteFiles = true;
config.remotePath = 'http://some.url/';
config.remoteFiles = [
	'file1.mp3',
	'file2.mp3'
];

module.exports.config = config;
