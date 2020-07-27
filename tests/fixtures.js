const zipstats = require('../index.js');
const chalk = require('chalk');

const getFixtureInfo = (zip, level) => {
    chalk.level = level;
    return {
        snapshotfile: `tests/fixtures/${zip}-${level}.snapshot`,
        currentout: zipstats(`tests/fixtures/${zip}.zip`),
    };
};

const getAllOutput = () => {
    return [
        getFixtureInfo('test-licenses', 3),
        getFixtureInfo('test-licenses', 0),
    ];
};

module.exports = {
    getAllOutput
}