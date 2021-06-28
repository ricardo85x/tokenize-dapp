import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import { ethers } from 'hardhat';
import { BigNumber } from 'ethers';
import { MyToken as MyTokenProps } from  "../src/types/MyToken"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

  const {deployments, getNamedAccounts} = hre;
  const {deploy} = deployments;

  const {deployer} = await getNamedAccounts();

  const INITIAL_TOKEN_SUPPLY = BigNumber.from(process.env.INITIAL_TOKEN_SUPPLY);

  const myToken = await deploy('MyToken', {
    from: deployer,
    args: ["Rics Token", "RIC", 0],
    log: true,
  });

  await deploy('UserTokens', {
    from: deployer,
    args: [],
    log: true,
  });


  const kycContract = await deploy('KycContract', {
    from: deployer,
    args: [],
    log: true,
  });

  const myTokenSale = await deploy('MyTokenSale', {
    from: deployer,
    args: [1, deployer, myToken.address, kycContract.address],
    log: true,
  });

  // get the myToken object with all methods
  const myTokenContract = await ethers.getContractAt("MyToken",myToken.address) as MyTokenProps;

  // add the tokenSale as a minter, so they can buy tokens and send to users
  await myTokenContract.addMinter(myTokenSale.address);

  // mint the initial token supply
  // await myTokenContract.mint(deployer, INITIAL_TOKEN_SUPPLY)

  // send the minted token to tokenSale
  // await myTokenContract.transfer(myTokenSale.address, INITIAL_TOKEN_SUPPLY, {
  //   from: deployer,
  // });

};
export default func;
func.tags = ['MyToken', 'KycContract', 'MyTokenSale', 'userTokens' ];