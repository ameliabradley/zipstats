const { table, getBorderCharacters } = require('table');
const filesize = require('filesize');
const chalk = require('chalk');
const AdmZip = require('adm-zip');

const tableOptions = {
  border: getBorderCharacters('void'),
  columnDefault: {
    paddingLeft: 0,
    paddingRight: 1,
  },
  columns: {
    0: {
      alignment: 'right',
    },
  },
  drawHorizontalLine: () => false,
};

const fs = (size) => filesize(size, { standard: 'iec' });

module.exports = (filename) => {
  const zip = new AdmZip(filename);
  let totalSize = 0;
  let totalCompressedSize = 0;
  const entries = zip.getEntries();
  entries.forEach((zipEntry) => {
    const { header: { size, compressedSize } } = zipEntry;
    totalSize += size;
    totalCompressedSize += compressedSize;
  });
  return table([
    [
      chalk.bold.whiteBright('Asset'),
      chalk.bold.whiteBright('Zipped'),
      chalk.bold.whiteBright('Reduction'),
      chalk.bold.whiteBright('Actual'),
      chalk.bold.whiteBright('%ofTotal'),
    ],
    ...zip.getEntries().map((zipEntry) => {
      const { entryName, header: { size, compressedSize } } = zipEntry;
      return [
        chalk.bold.green(entryName),
        chalk.yellow(fs(compressedSize)),
        chalk.white(fs(compressedSize - size)),
        chalk.white(fs(size)),
        `${((100 * compressedSize) / totalCompressedSize).toFixed(1)}%`,
      ];
    }),
    ['', '', '', '', ''],
    [
      chalk.bold.whiteBright('Total'),
      fs(totalCompressedSize),
      fs(totalCompressedSize - totalSize),
      fs(totalSize),
      '',
    ],
  ], tableOptions);
};
