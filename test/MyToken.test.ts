import chai from "chai";
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)

const { expect } = chai;

import { ethers, waffle } from "hardhat"
const { deployContract } = waffle;

import MyTokenArtifact from "../client/src/artifacts/contracts/MyToken.sol/MyToken.json"
import { MyToken as MyTokenProps } from "../src/types/MyToken"


describe("Token test", async () => {

    let myToken: MyTokenProps;

    const INITIAL_TOKENS_SUPPLY = process.env.INITIAL_TOKEN_SUPPLY;

    let [deployerAccount, recipient, anotherAccount] = ["","",""]

    beforeEach( async () => {
        const signers = await ethers.getSigners();

        [deployerAccount, recipient, anotherAccount] = [
            await signers[0].getAddress(), 
            await signers[1].getAddress(), 
            await signers[2].getAddress()
        ];

        myToken = (
            await deployContract(
                signers[0], 
                MyTokenArtifact, 
                [INITIAL_TOKENS_SUPPLY]
            )
        ) as MyTokenProps;

    })

    it("should have all tokens in my account", async () => {
        
        const totalSupply = await myToken.totalSupply();
        expect(await myToken.balanceOf(deployerAccount)).to.be.a.equal(totalSupply);

    })

    it("should be possible to send tokens between accounts", async () => {
        const sendTokens = 1;
        const totalSupply = await myToken.totalSupply();

        await expect(myToken.balanceOf(deployerAccount)).to.eventually.be.equal(totalSupply);
        await expect(myToken.transfer(recipient,sendTokens)).to.eventually.be.fulfilled;
        await expect(myToken.balanceOf(deployerAccount)).to.eventually.be.equal(totalSupply.sub(sendTokens));
        expect(myToken.balanceOf(recipient)).to.eventually.be.equal(sendTokens);

    })

    it("should not be possible to send more tokens than available in totalSupply", async () => {

        const balanceOfDeployer =  await myToken.balanceOf(deployerAccount);

        await expect(myToken.transfer(recipient, balanceOfDeployer.add(1))).to.eventually.be.rejected;
        expect(myToken.balanceOf(deployerAccount)).to.eventually.be.equal(balanceOfDeployer);

    })


})