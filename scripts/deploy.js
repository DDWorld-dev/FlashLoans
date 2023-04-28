const hre = require('hardhat');
const ethers = hre.ethers;

const path = require('path');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("SimpleFlashLoan");
  const token = await Token.deploy("0x0496275d34753A48320CA58103d5220d394FF77F");
  await token.deployed()
  console.log("address:", token.address);

}

// 0x0496275d34753A48320CA58103d5220d394FF77F - sepolia flash
// 0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb - polygon flash

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  }) 