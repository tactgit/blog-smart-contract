import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";

async function main() {
  const signers: SignerWithAddress[] = await ethers.getSigners();

  let contractOwnerBalanceBeforeDeploy = await signers[0].getBalance();
  console.log(
    `Contract Owner Balance: ${contractOwnerBalanceBeforeDeploy.toString()}`
  );

  const Blog = await ethers.getContractFactory("Blog");
  let BlogContract = await Blog.deploy();
  await BlogContract.deployed();
  console.log(`Blog Contract Address: ${BlogContract.address.toString()}`);

  let contractOwnerBalanceAfterDeploy = await signers[0].getBalance();
  console.log(
    `Contract Owner Balance: ${contractOwnerBalanceAfterDeploy.toString()}`
  );

  console.log(
    `Deployed Gas Fee: `,
    contractOwnerBalanceBeforeDeploy
      .sub(contractOwnerBalanceAfterDeploy)
      .toString()
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
