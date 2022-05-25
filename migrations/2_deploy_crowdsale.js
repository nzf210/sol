var WanCash = artifacts.require("./WanCash.sol");

module.exports = function (deployer) {
  const _nm = "Wancash";
  const _sym = "WCG";
  const _dec = 18;
  deployer.deploy(WanCash, _nm, _sym, _dec);
};
