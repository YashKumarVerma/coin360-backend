const redis = require("redis");
const { repository, error } = require("../logger/logger");

/**
 * initialize a redis client.
 */
const client = redis.createClient(6379, "127.0.0.1");

/** test fire redis events to ensure server up and running */
client.set("status", "server up");
client.get("status", (err, reply) => {
  if (err) {
    error("Redis connection not possible");
  } else {
    repository(reply);
  }
});

/** export for other modules to consume */
module.exports = { client };
