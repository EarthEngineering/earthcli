var command = {
  command: "serve",
  description: "Serve the build directory on localhost and watch for changes",
  builder: {
    port: {
      alias: "p",
      default: "8080"
    }
  },
  run: function(options, done) {
    process.env.CURRENT = "serve";
    var Serve = require("../serve");
    var Config = require("../../components/Config");
    var watch = require("./watch");

    var config = Config.detect(options);
    Serve.start(config, function() {
      watch.run(options, done);
    });
  }
};

module.exports = command;
