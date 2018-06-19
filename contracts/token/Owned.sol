pragma solidity ^0.4.23;


contract Owned {

  address owner_;
  address newOwner_;

  function owner() public view returns (address) {
    return owner_;
  }

  function newOwner() public view returns (address) {
    return newOwner_;
  }

  event OwnershipTransferred(address indexed _from, address indexed _to);

  constructor() public {
    owner_ = msg.sender;
  }

  modifier onlyOwner {
    require(msg.sender == owner_);
    _;
  }

  function transferOwnership(address _newOwner) public onlyOwner {
    newOwner_ = _newOwner;
  }

  function acceptOwnership() public {
    require(msg.sender == newOwner_);
    emit OwnershipTransferred(owner_, newOwner_);
    owner_ = newOwner_;
    newOwner_ = address(0);
  }

}
