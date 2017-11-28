BountyInfo = {code:"0x6060604052341561000f57600080fd5b6108b68061001e6000396000f300606060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630fbc0cd114610085578063473ca96c146100cb5780634e272768146100e0578063527749a4146100ea578063c79568461461010f578063dbf2f3c214610160578063fde7c834146101ad575b005b341561009057600080fd5b6100c9600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035600019169060200190919050506101db565b005b34156100d657600080fd5b6100de61044a565b005b6100e8610499565b005b61010d600480803590602001909190803560001916906020019091905050610583565b005b341561011a57600080fd5b610146600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506106e3565b604051808215151515815260200191505060405180910390f35b341561016b57600080fd5b610197600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610739565b6040518082815260200191505060405180910390f35b6101d9600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610781565b005b60008060001515600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514151561023d57600080fd5b60028360006040516020015260405180826000191660001916815260200191505060206040518083038160008661646e5a03f1151561027b57600080fd5b5050604051805190509150600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546000191682600019161415156102db57600080fd5b60026000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481151561032557fe5b0490508373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050151561036857600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015156103a857600080fd5b6001600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060008060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050505050565b60003073ffffffffffffffffffffffffffffffffffffffff16311415610497577f29822734f2619c764b25a111ff2328da08e02d6652fc891eb80227a6ec58774360405160405180910390a15b565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600102600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081600019169055506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550565b81341115151561059257600080fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415156105df57600080fd5b6000341115156105ee57600080fd5b6002828115156105fa57fe5b0682036000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081600019169055506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60001515600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151415156107e057600080fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411151561082d57600080fd5b60023481151561083957fe5b0634036000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550505600a165627a7a72305820f8a0f33f9517d1204f9f42bffc75f6fcd82ae615598cfc97e1235fb7339743cb0029", abi:[{"constant":false,"inputs":[{"name":"chall","type":"address"},{"name":"solution","type":"bytes32"}],"name":"bounty_solve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"win","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"remove_bounty","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"reward","type":"uint256"},{"name":"chall","type":"bytes32"}],"name":"add_bounty","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"chall","type":"address"}],"name":"get_solved","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"chall","type":"address"}],"name":"get_reward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"chall","type":"address"}],"name":"increase_bounty","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[],"name":"Win","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"bytes32"}],"name":"Hash","type":"event"}]}
personal.unlockAccount(eth.coinbase, "")
BountyContract = eth.contract(BountyInfo.abi)
var Bounty = BountyContract.new({from:eth.coinbase, data:BountyInfo.code, gas:10000000})
miner.start(8)
admin.sleepBlocks(2)
miner.stop()
tx = eth.getTransactionReceipt(Bounty.transactionHash)
console.log("Bounty transaction receipt:")
inspect(tx)
Bounty = BountyContract.at(tx.contractAddress)
console.log("code of the contract: 0x signify an error while setting the contract:")
inspect(eth.getCode(Bounty.address))