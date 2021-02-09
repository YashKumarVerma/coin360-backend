const chalk = require("chalk");

const hodor = (message) => {
  console.log(`${chalk.blue(`Hodor`)} :: ${message} `);
};

module.exports = { hodor };
