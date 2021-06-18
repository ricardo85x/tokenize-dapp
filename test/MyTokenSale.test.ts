import chai from "chai";
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

const { expect } = chai;

import { ethers, waffle } from "hardhat";

const { deployContract } = waffle

import MyTokenArtifact from "../src/artifacts/contracts/MyToken.sol/MyToken.json"
import { MyToken as MyTokenProps } from "../src/types/MyToken"

import KycContractArtifact from "../src/artifacts/contracts/KycContract.sol/KycContract.json"
import { KycContract as KycContractProps } from "../src/types/KycContract"

import MyTokenSaleArtifact from "../src/artifacts/contracts/MyTokenSale.sol/MyTokenSale.json"
import { MyTokenSale as MyTokenSaleProps } from "../src/types/MyTokenSale"

describe("My TokenSale tests", async () => {

    let myToken: MyTokenProps;
    let myKycContract: KycContractProps;
    let myTokenSale: MyTokenSaleProps;

    let [deployerAccount, recipient, anotherAccount] = ["","",""]

    beforeEach( async () => {
        const signers = await ethers.getSigners();

        [deployerAccount, recipient, anotherAccount] = [
            await signers[0].getAddress(),
            await signers[1].getAddress(),
            await signers[2].getAddress()
        ]

        myToken = await deployContract(
            signers[0],
            MyTokenArtifact,
            []
        ) as MyTokenProps

        myKycContract = await deployContract(
            signers[0], 
            KycContractArtifact
        ) as KycContractProps

        myTokenSale = await deployContract(
            signers[0],
            MyTokenSaleArtifact,
            [1, deployerAccount, myToken.address, myKycContract.address]
        ) as MyTokenSaleProps

        await myToken.addMinter(myTokenSale.address)

        await myToken.mint(deployerAccount, Number(process.env.INITIAL_TOKEN_SUPPLY))

        await myToken.transfer(myTokenSale.address,Number(process.env.INITIAL_TOKEN_SUPPLY))

    })

    it("should not have any token in my deploy account",  () => {
        expect(myToken.balanceOf(deployerAccount)).to.eventually.be.equal(0)
    })

    it("should have all tokens in the token sales contract", async () => {
        const balanceOnSalesSmartcontract = await myToken.balanceOf(myTokenSale.address);
        const totalSupply = await myToken.totalSupply();
        expect(balanceOnSalesSmartcontract).to.be.equal(totalSupply);
    })

    it("should not be possible to buy tokens without KYC", async () => {

        const TOKENS_TO_BUY = 1;
        expect(myTokenSale.buyTokens(deployerAccount, {value: TOKENS_TO_BUY})).to.eventually.be.rejected;

    })

    it("should be possible to buy tokens", async () => {

        const TOKENS_TO_BUY = 1;

        await myKycContract.setKycCompleted(deployerAccount)
        const balanceBefore = await myToken.balanceOf(deployerAccount);
        await expect(myTokenSale.buyTokens(deployerAccount, {value: TOKENS_TO_BUY})).to.eventually.be.fulfilled;
        expect(myToken.balanceOf(deployerAccount)).to.eventually.be.equal(balanceBefore.add(TOKENS_TO_BUY));

    })

})