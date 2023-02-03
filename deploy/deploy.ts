import { Wallet, utils } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import "dotenv/config";

export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deployment script for Simple Calculator contract`);

  //Initialize the wallet
  const wallet = new Wallet(`${process.env.PRIVATE_KEY}`);

  //Create deployer object and load artifact
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("SimpleCalculator");

  //Estimate contract deployment
  const number = 0;
  const deploymentFee = await deployer.estimateDeployFee(artifact, [number]);

  //Deposite funds to L2
  const DepositeHandle = await deployer.zkWallet.deposit({
    to: deployer.zkWallet.address,
    token: utils.ETH_ADDRESS,
    amount: deploymentFee.mul(2),
  });
  //Wait for deposite
  await DepositeHandle.wait();

  //Deploy contract
  const parsedFee = ethers.utils.formatEther(deploymentFee.toString());
  console.log(`Estimated deployment cost is ${parsedFee} ETH`);

  //Get constructor args for verification
  const simpleCalculatorContract = await deployer.deploy(artifact, [number]);
  console.log(
    "constructor args:" +
      simpleCalculatorContract.interface.encodeDeploy([number])
  );

  //Get contract info
  const contractAddress = simpleCalculatorContract.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);
}
