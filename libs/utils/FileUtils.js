const fs = require('fs');
const path = require('path');
const ini = require('ini');
const yaml = require('js-yaml');

function readFile(filePath) {
    return fs.readFileSync(path.join(process.env.ProjectPath, filePath), 'utf-8');
}

function readIniFile(filePath) {
    return ini.parse(readFile(filePath));
}

function readYamlFile(filePath) {
    return yaml.load(readFile(filePath));
}

module.exports = { readFile, readIniFile, readYamlFile }
