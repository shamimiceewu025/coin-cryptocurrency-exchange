// configurations for Ethereum deposit service
module.exports = {
    'host': 'http://localhost:8545', //Ip address and port of the ethereum node service
    'minMinedRequirement' : 0, //a transaction will be deposited only after N mined blocks.
    'minStartBlock': 4855, // When scan the block, the starting point
    'WeisPerCoin': 1000000000000,
    'ethDepositCheckInterval': 10000, // In milliseconds
    'keyStorePassword':'0.8487677677962937',
    'withdrawSourceAccount': '0xafdf17bcb4b9a99ab2fdf30b6f0d62b59ea42bdd'
};