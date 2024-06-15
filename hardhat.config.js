require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.4",
    paths: {
        artifacts: "./client/README.md",
    },
    networks: {
        hardhat: {
            chainId: 31337,
        },
    },
};
