pragma solidity >=0.4.24 <0.9.0;

import "openzeppelin-solidity/contracts/crowdsale/Crowdsale.sol";

contract WanCashCrowdsale is Crowdsale{

    constructor(uint256 _rate, address _wallet, ERC20 _token)
    public
    Crowdsale(_rate, _wallet, _token)
    {}


}