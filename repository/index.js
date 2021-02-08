const redis = require("redis");

/**
 * initialize a redis client.
 */
const client = redis.createClient({
  port: 6379,
  host: "120.0.0.1",
});

/** export for other modules to consume */
module.exports = { client };
