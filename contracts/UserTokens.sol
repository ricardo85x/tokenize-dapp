// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./CustomToken.sol";
import "./KycContract.sol";
import "./MyTokenSale.sol";

contract UserTokens {

    mapping(address => address[]) public userTokenAddress;
    mapping(address => address) public kycContractAddress;
    mapping(address => address) public myTokenSaleAddress;

    mapping(address => uint) public userTokensCount;


    event createTokenEvent(address _userAddress, address _tokenAddress);

    function createToken(string memory _name, string memory _symbol, uint8 _decimals) public {

        // create user token kyc and tokenSale contracts
        CustomToken userToken = new CustomToken(_name,_symbol, _decimals);
        KycContract userKycContract = new KycContract();
        MyTokenSale userTokenSale = new MyTokenSale(1, payable(msg.sender), userToken, userKycContract);

        userToken.addMinter(address(userTokenSale));

        // save contracts addresses
        userTokenAddress[msg.sender].push(address(userToken));
        kycContractAddress[address(userToken)] = address(userKycContract);
        myTokenSaleAddress[address(userToken)] = address(userTokenSale);

        userTokensCount[msg.sender]++;

        emit createTokenEvent(msg.sender, address(userToken));

    }    


}