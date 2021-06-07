import hre from "hardhat"
import { ethers } from "hardhat"


async function main() {

    const INITIAL_TOKEN_SUPPLY = process.env.INITIAL_TOKEN_SUPPLY;

    const signers = await ethers.getSigners();

    const MyToken = await hre.ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy(INITIAL_TOKEN_SUPPLY);


    const KycContract = await hre.ethers.getContractFactory("KycContract ");
    const kycContract = await KycContract.deploy();
     

    const MyTokenSale = await hre.ethers.getContractFactory("MyTokenSale");
    const myTokenSale = await MyTokenSale.deploy(1, signers[0].getAddress(), myToken.address, kycContract.address);

    await myToken.deployed();
    await myTokenSale.deployed();

    await myToken.transfer(myTokenSale.address, INITIAL_TOKEN_SUPPLY);

    console.log("MyToken deployed to:", myToken.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
