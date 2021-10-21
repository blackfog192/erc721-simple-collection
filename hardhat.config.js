/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {

  solidity: { 
    version: "0.7.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    }
  },

  defaultNetwork: "rinkeby",

  networks: {
     hardhat: {},
     rinkeby: {
        url: process.env.BLOCKCHAIN_NODE_URL,
        accounts: [process.env.PRIVATE_KEY]
     }
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API
  },

}