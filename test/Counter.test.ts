import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract, BigNumber } from "ethers";

describe("Counter", async () => {
  let counterContract: Contract;

  beforeEach(async () => {
    const CounterContractFactory = await ethers.getContractFactory("Counter");
    counterContract = await CounterContractFactory.deploy();
    await counterContract.deployed();
  });

  it("Test initial testing", async () => {
    expect(await counterContract.counter()).to.be.equals(BigNumber.from("0"));
  });

  it("Test add", async () => {
    await counterContract.add(BigNumber.from("2"));
    expect(await counterContract.counter()).to.be.equals(BigNumber.from("2"));
  });

  it("Test sub", async () => {
    await counterContract.add(BigNumber.from("2"));
    await counterContract.sub(BigNumber.from("1"));

    expect(await counterContract.counter()).to.be.equals(BigNumber.from("1"));
  });

  it("Test mul", async () => {
    await counterContract.add(BigNumber.from("2"));
    await counterContract.mul(BigNumber.from("2"));

    expect(await counterContract.counter()).to.be.equals(BigNumber.from("4"));
  });

  it("Test div", async () => {
    await counterContract.add(BigNumber.from("8"));
    await counterContract.div(BigNumber.from("3"));

    expect(await counterContract.counter()).to.be.equals(BigNumber.from("2"));
  });
});
