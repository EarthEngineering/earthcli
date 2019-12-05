var Schema = require("../ContractSchema");
var Contract = require("./contract.js");

var contract = function(options) {
  var binary = Schema.normalize(options || {});

  // We retrieve the earthweb instance.
  // EarthWeb should be already initiated at this point.
  Contract.initEarthWeb();

  // Note we don't use `new` here at all. This will cause the class to
  // "mutate" instead of instantiate an instance.
  return Contract.clone(binary);
};

module.exports = contract;

if (typeof window !== "undefined") {
  window.TruffleContract = contract;
}
