import chai from "chai";
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

const { expect } = chai;

import { ethers, waffle } from "hardhat";

const { deployContract } = waffle

import { CustomToken as CustomTokenProps } from "../src/types/CustomToken"

import UserTokensArtifact from "../src/artifacts/contracts/UserTokens.sol/UserTokens.json"
import { UserTokens as UsersTokensProps } from "../src/types/UserTokens"

describe("User Tokens test", async () => {

    let userTokens: UsersTokensProps;

    let [deployerAccount, recipient, anotherAccount] = ["","",""]

    beforeEach( async () => {
        const signers = await ethers.getSigners();

        [deployerAccount, recipient, anotherAccount] = [
            await signers[0].getAddress(),
            await signers[1].getAddress(),
            await signers[2].getAddress()
        ]

        userTokens = await deployContract(
            signers[0],
            UserTokensArtifact,
            []
        ) as UsersTokensProps

    })

    it("Should create Token with no errors", async () => {

        let nTokens = -1;

        const TOKEN_SYMBOL = "TEST"

        // create token
        await userTokens.createToken("Token test", TOKEN_SYMBOL, 0);
        const numberOfTokens = await userTokens.userTokensCount(deployerAccount);
        expect(numberOfTokens).to.be.equal(1);
        nTokens++;

        const userTokenAddress = await userTokens.userTokenAddress(deployerAccount, nTokens);

        // get kycContract
        expect(userTokens.kycContractAddress(userTokenAddress)).to.eventually.be.fulfilled;

        // get tokenSale Address
        expect(userTokens.myTokenSaleAddress(userTokenAddress)).to.eventually.be.fulfilled;

        // load  deployed customToken
        const customToken = await ethers.getContractAt("CustomToken", userTokenAddress) as CustomTokenProps;

        // check if symbol match
        expect(customToken.symbol()).to.eventually.be.equal(TOKEN_SYMBOL)

    })

})