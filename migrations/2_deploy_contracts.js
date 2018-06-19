var SafeMathLib = artifacts.require("SafeMathLib.sol");
var BDNToken = artifacts.require("BDNToken.sol");

module.exports = function(deployer) {
  deployer.deploy(SafeMathLib);
  deployer.link(SafeMathLib, BDNToken);
  deployer.deploy(BDNToken);
};
