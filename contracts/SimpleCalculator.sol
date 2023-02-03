//contracts/SimpleCalculator.sol
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract SimpleCalculator {
   int256 private result;

   constructor(int256 _number) {
       result = _number;
   }

    function equals() public view returns (int256) {
        return result;
    }

    function clear() public returns (int256) {
        return result = 0;
    }

    function add(int256 number) public returns (int256) {
        return result = result + number;
    }

    function subtract(int256 number) public returns (int256) {
        return result = result - number;
    }

    function multiply(int256 number) public returns (int256) {
        return result = result * number;
    }

    function divide(int256 number) public returns (int256) {
        return result = result / number;
    }

}
