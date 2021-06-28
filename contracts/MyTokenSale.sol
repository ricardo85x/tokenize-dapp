// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "./Crowdsale.sol";

import "./KycContract.sol";

import "./mint/MintedCrowdsale.sol";

contract MyTokenSale is MintedCrowdsale {
    using SafeMath for uint256;



    KycContract kyc;


    constructor (
        uint256 rate,    // rate in TKNbits
        address payable wallet,
        IERC20 token,
        KycContract _kyc
    )
        MintedCrowdsale()
        Crowdsale(rate, wallet, token)
    {
        kyc = _kyc;
      
        
    }

    function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view override {
        super._preValidatePurchase(beneficiary, weiAmount);
        require(kyc.kycCompleted(msg.sender), "KYC not completed, purchase not allowed");
        require(weiAmount >= super.rate(), "Not enough money to purchase");

    }

    function _getTokenAmount(uint256 weiAmount) internal view override returns (uint256) {
        
      return weiAmount.div(super.rate());

    }

    


}