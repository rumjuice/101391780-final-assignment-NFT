import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import hre, { ethers } from "hardhat";

export interface Signers {
  owner: SignerWithAddress;
  buyer: SignerWithAddress;
}

describe("LandToken", function () {
  const signers = {} as Signers;

  before(async () => {
    const account: SignerWithAddress[] = await hre.ethers.getSigners();
    signers.owner = account[0];
  });

  it("Should return the new greeting once it's changed", async function () {
    const LandToken = await ethers.getContractFactory("LandToken");
    const land = await LandToken.deploy("100000000000000000000");
    await land.deployed();

    expect(await land.greet()).to.equal("Hello, world!");

    const setGreetingTx = await land.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await land.greet()).to.equal("Hola, mundo!");

    console.log(signers.owner.address);
    console.log(await land.balanceOf(signers.owner.address));
  });
});
