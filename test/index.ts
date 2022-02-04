import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { assert } from "chai";
import { Contract, ContractFactory } from "ethers";
import hre, { ethers } from "hardhat";

export interface Signers {
  owner: SignerWithAddress;
  buyer: SignerWithAddress;
}

describe("LandToken", () => {
  const signers = {} as Signers;
  let LandToken: ContractFactory;
  let land: Contract;

  before(async () => {
    const account: SignerWithAddress[] = await hre.ethers.getSigners();
    signers.owner = account[0];

    LandToken = await ethers.getContractFactory("LandToken");
    land = await LandToken.deploy();
    await land.deployed();
  });

  it("Should sets name and symbol", async () => {
    assert.equal(await land.name(), "LandToken");
    assert.equal(await land.symbol(), "LAND");
  });

  it("The owner should have 1 Land Token", async () => {
    assert.equal(await land.balanceOf(signers.owner.address), "1");
  });

  it("First token ID should be owned by the owner", async () => {
    assert.equal(await land.ownerOf("0"), signers.owner.address);
  });
});
