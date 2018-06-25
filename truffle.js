/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

const Web3 = require("web3");
const web3 = new Web3();
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "";

const WalletProvider = require("truffle-wallet-provider");
const Wallet = require("ethereumjs-wallet");
const mainNetPrivateKey = Buffer.from(process.env["MAINNET_PRIVATE_KEY"], "hex");
const mainNetWallet = Wallet.fromPrivateKey(mainNetPrivateKey);
const mainNetProvider = new WalletProvider(
  mainNetWallet,
  "https://mainnet.infura.io"
);

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io"),
      network_id: "3",
      gas: 4600000,
      gasPrice: web3.utils.toWei("20", "gwei")
    },
    mainnet: {
      provider: mainNetProvider,
      gas: 4600000,
      gasPrice: web3.utils.toWei("2", "gwei"),
      network_id: "1"
    }
  }
};
