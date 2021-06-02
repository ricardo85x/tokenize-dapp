import hre from "hardhat"
import { ethers } from "hardhat"


async function main() {

    const TOTALTOKENS = 1000;


    const signers = await ethers.getSigners();


    const MyToken = await hre.ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy(TOTALTOKENS);

    const MyTokenSale = await hre.ethers.getContractFactory("MyTokenSale");
    const myTokenSale = await MyTokenSale.deploy(1, signers[0].getAddress(), myToken.address);

    await myToken.deployed();
    await myTokenSale.deployed();

    await myToken.transfer(myTokenSale.address, TOTALTOKENS);


    console.log("MyToken deployed to:", myToken.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
