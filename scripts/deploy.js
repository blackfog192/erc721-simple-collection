async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying ERC-721 contract with the account:", deployer.address);
  
    const Contract = await ethers.getContractFactory("SimpleContract");
    const contract = await Contract.deploy();

    await contract.deployed();
  
    console.log("Success! Contract address:", contract.address);
}
  
main().then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
  