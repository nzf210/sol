pragma solidity >=0.4.24 <0.9.0;

import "openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
//import "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
//import "openzeppelin-solidity/contracts/token/ERC20/PausableToken.sol";

contract WanCash is DetailedERC20, StandardToken  {
    constructor(string _name, string _sym, uint8 _dec) 
    DetailedERC20(_name, _sym, _dec)
    public {}
}
// contract WanCash is MintableToken, PausableToken, DetailedERC20 {
//     constructor(string _name, string _symbol, uint8 _decimals)
//         DetailedERC20(_name, _symbol, _decimals)
//         public
//     {    }
// }
