var Web3 = require("web3");
//连接到Ganache
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/30bf4bface004c04b0ee6fa05753adca'));


var fs = require("fs");
var data = fs.readFileSync("./artifacts/contracts/BeefswapV2Factory.sol/BeefswapV2Factory.json", "utf-8");


//创建合约对象
var contract = new web3.eth.Contract(JSON.parse(data).abi,'0xCb215e589136b246D54B7135C03FCA94338aE418');

//调用合约的方法
contract.methods.INIT_CODE_PAIR_HASH().call().then(console.log);