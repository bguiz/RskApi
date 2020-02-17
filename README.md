# RskApi

[RSK](http://rsk.co) API, accesing a running node using JSON RPC. It's a simple replacement to the usual web3
interface.

This is a personal project, not related with or endorsed by [RSK](http://rsk.co).

## Installation

Via npm on Node:

```
npm install rskapi
```

## Usage

Create the RSK API Object by calling the host function.
```
var rskapi = require('rskapi');

var rsk = rskapi.host('http://host.to.node.com:PORT');

/** operations with the node **/
```

## References

- [Web3 JavaScript app API](https://github.com/ethereum/wiki/wiki/JavaScript-API)
- [Web3 documentation](http://web3js.readthedocs.io/en/1.0/web3.html)
- [JSON RPC](https://github.com/ethereum/wiki/wiki/JSON-RPC)
- [How to generate Private key, public key and address](https://ethereum.stackexchange.com/questions/39384/how-to-generate-private-key-public-key-and-address)

## Samples

TBD

## Versions

- 0.0.1 initial version
- 0.0.2 callTransaction
- 0.0.3 fix duration encoding in unlock account
- 0.0.4 using simplejsonrpc 0.0.3
- 0.0.5 sending second argument in getBalance
- 0.0.6 sending transaction normalized data
- 0.0.7 exposing JSON RPC provider
- 0.0.8 using simplejsonrpc 0.0.4 with https support
- 0.0.9 send raw transaction
- 0.0.10 support async/await; using simplejsonrpc 0.0.6
- 0.0.11 new trace commands; get block using pending, latests, earlier

## Contribution

Feel free to [file issues](https://github.com/ajlopez/RskApi) and submit
[pull requests](https://github.com/ajlopez/RskApi/pulls) � contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

