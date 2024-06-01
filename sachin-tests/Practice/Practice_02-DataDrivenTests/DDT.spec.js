const {test, expect} = require('@playwright/test');
const fs = require('fs');

// const testData = JSON.parse(fs.readFileSync('sachin-tests/Practice_02/DataDrivenTests/testData.json'));
const testData = require('./testData.json');

test.describe('DD Test suit', () => {
    testData.forEach((node, index) => {
        test('DD Test | data-' + (index + 1), () => {
            console.log(node);
        })
    })
})

