import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract, BigNumber } from "ethers";

describe("Blog", async () => {
  let blogsContract: Contract;
  let signers: SignerWithAddress[];

  beforeEach(async () => {
    signers = await ethers.getSigners();

    const BlogsContractFactory = await ethers.getContractFactory("Blog");
    blogsContract = await BlogsContractFactory.deploy();
    await blogsContract.deployed();
  });

  it("Test", async () => {
    expect(await blogsContract.blogs(1)).to.be.equals(
      ethers.constants.AddressZero
    );

    await expect(blogsContract.purchase(1000)).to.be.revertedWith(
      "Wrong Blog Id"
    );
    await blogsContract.purchase(BigNumber.from("1"));

    const ownerAddress = await signers[0].getAddress();
    expect(await blogsContract.blogs(1)).to.be.equals(ownerAddress);
  });
});
