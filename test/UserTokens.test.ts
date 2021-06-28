import chai from "chai";
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

const { expect } = chai;

import { ethers, waffle } from "hardhat";

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

const { deployContract } = waffle

import { MyToken as MyTokenProps } from "../src/types/MyToken"


import UserTokensArtifact from "../src/artifacts/contracts/UserTokens.sol/UserTokens.json"
import { UserTokens as UsersTokensProps } from "../src/types/UserTokens"

import MyTokenSaleArtifact from "../src/artifacts/contracts/MyTokenSale.sol/MyTokenSale.json"
import { MyTokenSale as MyTokenSaleProps } from "../src/types/MyTokenSale"

import KycContractArtifact from "../src/artifacts/contracts/KycContract.sol/KycContract.json"
import { KycContract as KycContractProps } from "../src/types/KycContract"


describe("User Tokens test", async () => {

    let userTokens: UsersTokensProps;


    let accountSigner1: SignerWithAddress;
    let accountSigner2: SignerWithAddress;
    let accountSigner3: SignerWithAddress;



    let [accountAddresses1, accountAddresses2, accountAddresses3] = ["", "", ""]



    beforeEach(async () => {
        const signers = await ethers.getSigners();

        accountSigner1 = signers[0]
        accountSigner2 = signers[1]
        accountSigner3 = signers[2]

        accountAddresses1 = await accountSigner1.getAddress()
        accountAddresses2 = await accountSigner2.getAddress()
        accountAddresses3 = await accountSigner3.getAddress()



        userTokens = await deployContract(
            accountSigner1,
            UserTokensArtifact,
            []
        ) as UsersTokensProps

    })

    it("Should create Token with no errors", async () => {

        let nTokens = -1;

        const TOKEN_SYMBOL = "TEST"

        // create token
        await userTokens.createToken("Token test", TOKEN_SYMBOL, 0, 1);
        const numberOfTokens = await userTokens.userTokensCount(accountAddresses1);
        expect(numberOfTokens).to.be.equal(1);
        nTokens++;

        const userTokenAddress = await userTokens.userTokenAddress(accountAddresses1, nTokens);

        // get kycContract
        expect(userTokens.kycContractAddress(userTokenAddress)).to.eventually.be.fulfilled;

        // get tokenSale Address
        expect(userTokens.myTokenSaleAddress(userTokenAddress)).to.eventually.be.fulfilled;

        // load  deployed myToken
        const myToken = await ethers.getContractAt("MyToken", userTokenAddress) as MyTokenProps;

        // check if symbol match
        expect(myToken.symbol()).to.eventually.be.equal(TOKEN_SYMBOL)

        console.log("Decimal", await myToken.symbol())

    })

    it("Should receive correct value of tokens when buyed", async () => {

        let nTokens = -1;

        const TOKEN_SYMBOL = "TEST"

        const WAI_PRICE = 5

        const TOKEN_DECIMAL = 18

        // create token
        await userTokens.createToken("Token test", TOKEN_SYMBOL, TOKEN_DECIMAL, WAI_PRICE);

        const numberOfTokens = await userTokens.userTokensCount(accountAddresses1);
        expect(numberOfTokens).to.be.equal(1);
        nTokens++;

        const userTokenAddress = await userTokens.userTokenAddress(accountAddresses1, nTokens);

        const myTokenCreatedContract = await ethers.getContractAt("MyToken", userTokenAddress) as MyTokenProps;

        const tokenSaleAddress = await userTokens.myTokenSaleAddress(userTokenAddress)

        const kycAddress = await userTokens.kycContractAddress(userTokenAddress)

        const tokenSaleContract = await ethers.getContractAt("MyTokenSale", tokenSaleAddress) as MyTokenSaleProps;

        const kycContract = await ethers.getContractAt("KycContract", kycAddress) as KycContractProps;

        expect(await tokenSaleContract.rate()).to.be.equal(ethers.BigNumber.from(WAI_PRICE))

        await expect(kycContract.setKycCompleted(accountAddresses1)).to.be.eventually.fulfilled;

        const NTOKENS = 11;

        const TOTAL_WAI_TO_BUY = NTOKENS * WAI_PRICE;

        await tokenSaleContract.buyTokens(accountAddresses1, { value: TOTAL_WAI_TO_BUY })

        const balanceReceived = await myTokenCreatedContract.balanceOf(accountAddresses1)

        expect(balanceReceived).to.be.equal( ethers.BigNumber.from(TOTAL_WAI_TO_BUY).div(WAI_PRICE))
  
    })

})