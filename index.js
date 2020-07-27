const { table, getBorderCharacters } = require("table");
const filesize = require("filesize");
const chalk = require("chalk");
const AdmZip = require("adm-zip");
const bar = require("precisebar");

const tableOptions = {
  border: getBorderCharacters("void"),
  columnDefault: {
    paddingLeft: 0,
    paddingRight: 1,
  },
  columns: {
    0: {
      alignment: "right",
    },
  },
  drawHorizontalLine: () => false,
};

const fs = (size) => filesize(size, { standard: "iec" });

module.exports = (filename) => {
  const zip = new AdmZip(filename);
  let totalSize = 0;
  let totalCompressedSize = 0;
  const entries = zip.getEntries();
  entries.forEach((zipEntry) => {
    const {
      header: { size, compressedSize },
    } = zipEntry;
    totalSize += size;
    totalCompressedSize += compressedSize;
  });
  return table(
    [
      ["", "", "", "", "", ""],
      [
        chalk.bold.whiteBright("Asset"),
        chalk.bold.whiteBright("Actual"),
        "",
        chalk.bold.whiteBright("Zip"),
        chalk.bold.whiteBright("Diff"),
        chalk.bold.whiteBright("% of Zip"),
      ],
      ...zip.getEntries().map((zipEntry) => {
        const {
          entryName,
          header: { size, compressedSize },
        } = zipEntry;
        return [
          chalk.bold.green(entryName),
          chalk.white(fs(size)),
          "=>",
          chalk.yellow(fs(compressedSize)),
          `${chalk.gray(fs(compressedSize - size))}`,
          `${`${((100 * compressedSize) / totalCompressedSize).toFixed(
            1
          )}%`.padEnd(5)} ${chalk.bgGray.white(bar.getProgress(
            compressedSize / totalCompressedSize,
            10,
            '',
            ''
          ))}`,
        ];
      }),
      ["", "", "", "", "", ""],
      [
        chalk.bold.whiteBright("Total"),
        fs(totalSize),
        "=>",
        chalk.yellow(fs(totalCompressedSize)),
        `${chalk.grey(fs(totalCompressedSize - totalSize))}`,
        "",
      ],
    ],
    tableOptions
  );
};
