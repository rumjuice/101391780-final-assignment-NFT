//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/// @title LandToken
/// @author Ramdhani Rachmansyah
/// @notice Simple Land NFT Token
/// @dev Simple Land NFT Token
contract LandToken is ERC721 {
    /// @notice Create new Land token
    /// @dev Constructor to initialize new token and give the supplies to the owner
    /// @param _totalSupply (uint256)
    constructor(uint256 _totalSupply) ERC721("LandToken", "LAND") {
        _mint(msg.sender, _totalSupply);
    }
}
