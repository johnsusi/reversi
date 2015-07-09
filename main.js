var path = require('path');

var engine = require("detect-engine");
console.log(engine);
if (process.versions['electron']) engine = 'electron';
if (process.versions['nwjs'])     engine = 'nwjs';

var version = process.versions[engine];
if (!version) version = process.version;

var name = ['reversi', process.platform, process.arch, engine, version].join('-');

var full_path = path.join(__dirname, 'build', name);

module.exports = require(full_path);
