const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./Build/FundraiserFactory.json");

//Passing account mnemonic and link to infura API
const provider = new HDWalletProvider(
'pluck snow tongue prize arrow report burden orchard slush tuna surge tourist',
'https://rinkeby.infura.io/P6o07CCw6xXzOwz8QuJP'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account: ", accounts[0]);

  result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });
  console.log("Contract deployed to: " + result.options.address);
};
deploy();
