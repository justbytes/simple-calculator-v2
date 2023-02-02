import { expect } from "chai";
const { ethers } = require("hardhat");

describe("Simple Calculator", () => {
  describe("Deployment", function () {
    it("Sucessfully deploys", async function () {
      const SimpleCalculator = await ethers.getContractFactory(
        "SimpleCalculator"
      );
      const simpleCalculator = await SimpleCalculator.deploy();
      await simpleCalculator.deployed();
    });
  });
});
