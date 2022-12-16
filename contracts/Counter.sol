// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract Counter {
    uint256 public counter;

    function add(uint256 _amount) public {
        counter += _amount;
    }

    function sub(uint256 _amount) public {
        counter -= _amount;
    }

    function mul(uint256 _amount) public {
        counter *= _amount;
    }

    function div(uint256 _amount) public {
        counter /= _amount;
    }
}
