const fs = require('fs');
const ini = require('ini');
const path = require('path');

function readFile(filePath) {
    return fs.readFileSync(path.join(process.env.ProjectPath, filePath), 'utf-8');
}

function readIniFile(filePath) {
    return ini.parse(readFile(filePath));
}

module.exports = { readFile, readIniFile }
