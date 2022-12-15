// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract Counter {
    uint256 public counter;

    function add(uint256 _amount) public {
        counter += _amount;
    }
}
