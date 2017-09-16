
var rskapi = require('..');

exports['get transaction by hash'] = function (test) {
	var provider = createProvider();
	
	test.async();
	
	provider.eth_getTransactionByHash = function (hash) {
		return {
			hash: hash
		};
	};
	
	var host = rskapi.host(provider);
	
	host.getTransactionByHash('0x1234', function (err, data) {
		test.equal(err, null);
		test.ok(data);
		test.equal(data.hash, '0x1234');
		test.done();
	});
};

exports['get transaction receipt by hash'] = function (test) {
	var provider = createProvider();
	
	test.async();
	
	provider.eth_getTransactionReceipt = function (hash) {
		return {
			hash: hash
		};
	};
	
	var host = rskapi.host(provider);
	
	host.getTransactionReceiptByHash('0x1234', function (err, data) {
		test.equal(err, null);
		test.ok(data);
		test.equal(data.hash, '0x1234');
		test.done();
	});
};

exports['send transaction'] = function (test) {
	var provider = createProvider();
	
	test.async();
	
	provider.eth_sendTransaction = function (data) {
		return data;
	};
	
	var host = rskapi.host(provider);
	
	var txdata = {
		from: '0x01',
		to: '0x02',
		gasPrice: 1,
		gas: 21000,
		value: 10000
	}
	
	host.sendTransaction(txdata, function (err, data) {
		test.equal(err, null);
		test.ok(data);
		test.deepEqual(data, txdata);
		test.done();
	});
};

function createProvider() {
	return {
		call: function (method, args, cb) {
			cb(null, this[method].apply(this,args));
		}
	}
}

