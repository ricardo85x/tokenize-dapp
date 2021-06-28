// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

import "./mint/ERC20Mintable.sol";

contract MyToken is ERC20Mintable, Ownable  {


    uint8 custom_decimal;

    constructor (string memory name_, string memory symbol_, uint8 decimals_) ERC20(name_, symbol_) {
        custom_decimal = decimals_;
    }

    // This token is not divisible, so 0 decimals    
    function decimals() public view virtual override returns (uint8) {
        return custom_decimal;
        // return 1;
    }

    event tokenMinted(address account, uint256 amount);

    function mint(address account, uint256 amount) public onlyMinter override returns (bool) {

        // super.mint(account, amount);
        super.mint(account, amount);

        emit tokenMinted(account, amount);

        return true;
    }

    function transferOwnership(address newOwner) public override onlyOwner {
        super.transferOwnership(newOwner);
    }
}
