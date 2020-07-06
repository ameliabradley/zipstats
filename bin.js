#!/usr/bin/env node
const fs = require('fs');
const zipstats = require('./index.js');

if (process.argv.length != 3) {
    console.log('zipstats cli stat display')
    console.log('Usage: zipstats [FILENAME]')
    return;
}

let [_0, _1, filename] = process.argv;

if (!fs.existsSync(filename)) {
    console.error(`File '${filename}' does not exist`);
    return;
}

console.log(zipstats(filename));