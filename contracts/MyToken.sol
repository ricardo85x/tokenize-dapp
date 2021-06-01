// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Super Pog Cappucino Token", "SPC") {
        _mint(msg.sender, initialSupply);
    }

    // This token is not divisible, so 0 decimals    
    function decimals() public view virtual override returns (uint8) {
        return 0;
    }
}