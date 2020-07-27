#!/usr/bin/env node
const fs = require('fs');
const fixtures = require('./fixtures.js');

const updateFixture = fixture => {
    return new Promise((resolve, reject) => {
        process.stdout.write(`Updating fixture: ${fixture.snapshotfile}...`);
        fs.writeFile(fixture.snapshotfile, fixture.currentout, err => {
            if (err) {
                console.log(`💥 Error: ${err}`);
                reject();
                return;
            }
            console.log('✏️  UPDATED');
            resolve();
            return;
        });
    });
};

const runUpdates = async () => {
    for (fixture of fixtures.getAllOutput()) {
        await updateFixture(fixture);
    }
};

runUpdates();