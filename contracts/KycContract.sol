// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";


// Know Your Customer Contract
contract KycContract is Ownable{

    mapping(address => bool)   allowed; 

    uint public kycPrice = 10;

    event KycPurchased(address from, uint value);

    function buyKyc() external payable {
        require(msg.value >= kycPrice, "You need to send more money to buy kyc");
        allowed[msg.sender] = true;
        emit KycPurchased(msg.sender, msg.value);
    }

    function withdrawKyc() external onlyOwner {
        uint balance = address(this).balance;
        require(balance > 0, "nothing to withdraw...");
        payable(msg.sender).transfer(balance);
    }

    function setKycPrice(uint _amountInWei) external onlyOwner {
        require(_amountInWei > 0, "you cannot set the kyc for free");
        kycPrice = _amountInWei;
    }

    function setKycCompleted(address _addr) public onlyOwner {
        allowed[_addr] = true;
        emit KycPurchased(_addr, 0);
    }

    function setKycRevoked(address _addr) public onlyOwner { 
        allowed[_addr] = false;
    }

    function kycCompleted(address _addr) public view returns(bool) {
        return allowed[_addr]; 
    }


}