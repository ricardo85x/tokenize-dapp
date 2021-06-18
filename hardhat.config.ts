import { HardhatUserConfig } from "hardhat/types";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'

import 'hardhat-deploy';
import 'hardhat-deploy-ethers';

import { task } from "hardhat/config";
import * as dotenv from "dotenv";


dotenv.config()

task("migrate", "migrate the tokens", async () => {


});


const config: HardhatUserConfig = {
  solidity: "0.8.0",
  namedAccounts: {
    deployer: 0
  },
  paths: {
    artifacts: "src/artifacts",
    deployments: "client/src/hardhat-deploy"
  },
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
  },
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      saveDeployments: true,
      accounts: {
        mnemonic: process.env.MNEMONIC
      }
    },
    ropsten: {
      url: process.env.INFURA_ROPSTEN_HTTPS_ENDPOINT,
      saveDeployments: true,
      accounts: {
        mnemonic: process.env.MNEMONIC
      }
    }
  }
};

export default config;