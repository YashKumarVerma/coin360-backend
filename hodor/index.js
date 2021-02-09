const { hodor } = require("../logger/logger");
const { dataFetcher } = require("./dataFetcher");
let locked = false;

const iterator = async () => {
  /** get json data from server */
  const data = await dataFetcher();

  /** one by one save response into redis cache  */

  /** restart updater */
  startUpdater();
};

/** define update method here */
setInterval(() => {
  if (!locked) {
    iterator();
    stopUpdater();
  }
}, 10 * 1000);

/** methods to control update operations  */
const startUpdater = () => {
  hodor("Updater starting");
  locked = false;
  return !locked;
};

const stopUpdater = () => {
  hodor("Updater stopping");
  locked = true;
  return !locked;
};

module.exports = { startUpdater, stopUpdater };
