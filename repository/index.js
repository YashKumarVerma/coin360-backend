const redis = require("redis");

/**
 * initialize a redis client.
 */
const client = redis.createClient(6379, "127.0.0.1");

/** test fire redis events to ensure server up and running */
client.set("status", "redis server up");
client.get("status", (err, reply) => {
  if (err) {
    console.log("connection err");
  } else {
    console.log(reply);
  }
});

/** export for other modules to consume */
module.exports = { client };
