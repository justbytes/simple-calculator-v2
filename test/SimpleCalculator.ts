import { expect } from "chai";
const { ethers } = require("hardhat");

describe("Simple Calculator", () => {
  describe("Deployment", () => {
    it("Sucessfully deploys", async () => {
      const SimpleCalculator = await ethers.getContractFactory(
        "SimpleCalculator"
      );
      const simpleCalculator = await SimpleCalculator.deploy();
      await simpleCalculator.deployed();

      describe("simpleCalculator Functionality", async () => {
        // Sets inital result to 0
        beforeEach(async () => {
          const result = await simpleCalculator.clear();
          await result.wait();
        });
        it("Performs addition", async () => {
          // Adds 15 to 0
          await simpleCalculator.add(15);
          const result = await simpleCalculator.equals();
          expect(result).to.equal(15);
        });
        it("Performs subtraction", async () => {
          // Substracts 5 from 0
          await simpleCalculator.subtract(5);
          const result = await simpleCalculator.equals();
          expect(result).to.equal(-5);
        });
        it("Performs multiplication", async () => {
          // Adds 15 to 0
          await simpleCalculator.add(15);
          // Multiplies 2 by 15
          await simpleCalculator.multiply(2);
          const result = await simpleCalculator.equals();
          expect(result).to.equal(30);
        });
        it("Performs divison", async () => {
          // Sets intial value to -50
          await simpleCalculator.add(-50);
          // Divide 2 by -50
          await simpleCalculator.divide(2);
          const result = await simpleCalculator.equals();
          expect(result).to.equal(-25);
        });
      });
    });
  });
});
