# Simple ERC-721 Collection contract
## Installation
Clone this repository and install dependencies

    git clone https://github.com/smart192/erc721-simple-collection.git
    npm install

Create .env file
    
    BLOCKCHAIN_NODE_URL = {infura or alchemy url}
    PRIVATE_KEY = {wallet private key}
    ETHERSCAN_API = {etherscan.io api key}  

## Project files

  * `contracts/SimpleContract.sol`
    : ERC-721 collection contract file. 
  * `scripts/deploy.js`
    : HardHat script for deploying contract.

## Usage

Complile solidity contract 

    npx hardhat compile

Deploy contract to Rikneby network

    npx hardhat run scripts/deploy.js --network rinkeby

Verify contract on etherscan.io

    npx hardhat verify "your contract addres" --network rinkeby    
    
After successful deploy use Web3 to set contract metadata URL, provenance hash and start sale.
