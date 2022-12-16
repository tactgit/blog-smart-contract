import { run } from "hardhat";

async function main() {
  try {
    await run("verify:verify", {
      address: process.env.DEPLOYED_BLOG_CONTRACT_ADDRESS!,
      constructorArguments: [],
      contract: "contracts/Blog.sol:Blog",
    });
  } catch (err) {
    console.log(err);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
