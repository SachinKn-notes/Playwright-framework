// .js file
const testData1 = require('./testData_file.js');
console.log(testData1.name);

// .json file
const testData2 = require('./testData_file.json');
console.log(testData2.age);

// .ini file
const fs = require('fs');
const ini = require('ini');

const config = ini.parse(fs.readFileSync('./tests/Practice/Practice_03-TestData/testData_file.ini', 'utf-8'));
console.log(config.details.name, config.details.age);

// .env file
// require('dotenv').config();
console.log(process.env.PORT);