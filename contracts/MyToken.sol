// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./mint/ERC20Mintable.sol";

contract MyToken is ERC20Mintable {
    constructor() ERC20("Super Ric Token", "RIC") {
    }

    // This token is not divisible, so 0 decimals    
    function decimals() public view virtual override returns (uint8) {
        return 0;
    }

    event tokenMinted(address account, uint256 amount);

    function mint(address account, uint256 amount) public  onlyMinter override returns (bool) {
        super.mint(account, amount);

        emit tokenMinted(account, amount);

        return true;
    }
}