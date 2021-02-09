const chalk = require("chalk");

const hodor = (message) => {
  console.log(`${chalk.blue(`Hodor`)} :: ${message} `);
};

const repository = (message) => {
  console.log(`${chalk.yellow(`Cache`)} :: ${message} `);
};

const error = (message) => {
  console.log(`${chalk.redBright(`Error`)} :: ${message} `);
};

module.exports = { hodor, repository, error };
