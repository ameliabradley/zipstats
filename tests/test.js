#!/usr/bin/env node
const fs = require('fs');
const fixtures = require('./fixtures');

const test = fixture => {
    return new Promise((resolve, reject) => {
        process.stdout.write(`Running fixture test for ${fixture.snapshotfile}...`);

        if (!fs.existsSync(fixture.snapshotfile)) {
            console.error(`🤷‍♂️ File '${fixture.snapshotfile}' does not exist`);
            reject();
            return;
        }

        fs.readFile(fixture.snapshotfile, {}, (err, data) => {
            if (err) {
                console.error(`Error reading '${fixture.snapshotfile}'`);
                reject();
                return;
            }

            if (fixture.currentout != data) {
                console.error(`MISMATCH:`);
                console.error(`'${fixture.snapshotfile}' content:\n${data}\n\n`);
                console.error(`zipstats content:\n${fixture.currentout}`);
                reject();
                return;
            }

            console.log(`✅ VALID`);
            resolve();
        });
    });
};

const runTests = async () => {
    for (fixture of fixtures.getAllOutput()) {
        await test(fixture);
    }
};

runTests();