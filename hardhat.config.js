require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "Private key"

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/Api key",
      chainId: 11155111,
      accounts: [
        PRIVATE_KEY
      ],
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/Api key",
      chainId: 5,
      accounts: [
        PRIVATE_KEY
      ],
    },
    main: {
      url: "https://eth-mainnet.g.alchemy.com/v2/Api key",
      chainId: 1,
      accounts: [
        PRIVATE_KEY
      ],
    },
    polygon: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/Api key",
      chainId: 137,
      accounts: [
        PRIVATE_KEY
      ],
    },
  },
};
