import { HardhatUserConfig } from "hardhat/types";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import { task } from "hardhat/config";
import * as dotenv from "dotenv";
dotenv.config()

task("migrate", "migrate the tokens", async () => {


});


const config: HardhatUserConfig = {
  solidity: "0.8.0",
  paths: {
    artifacts: "client/src/artifacts"
  },
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
  },
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [
        "fec3b3ba780468ca379f4384dde546e9852b7f012696a25d7dc61001c15b349d",
        "9eb590444041bc02bf5bfa1954730ded8f4319799d13cf0c71a6ef00d632ba28",
        "ff4c29e2698102f99579aa3ddd0879b2b07b664b0df8519f0148e6498683f427"
      ]
    }
  }
};

export default config;