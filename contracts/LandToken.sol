//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Counters} from "@openzeppelin/contracts/utils/Counters.sol";

/// @title LandToken
/// @author Ramdhani Rachmansyah
/// @notice Simple Land NFT Token
/// @dev Simple Land NFT Token
contract LandToken is ERC721 {
    /// @notice Generate incremental token ID
    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;

    /// @notice Create new Land token
    /// @dev Constructor to initialize new NFT
    constructor() ERC721("LandToken", "LAND") {
        uint256 tokenId = _tokenId.current();
        /// @notice Create token for the owner
        _mint(msg.sender, tokenId);

        /// @notice Increment the token ID
        _tokenId.increment();
    }
}
