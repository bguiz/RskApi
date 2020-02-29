
const rskapi = require('../..');
const utils = require('./lib/utils');

let config;

try {
    config = require('./config.json');
}
catch (ex) {
    config = {};
}

if (!config.instances)
    config.instances = {};

if (!config.options)
    config.options = {};

const from = utils.getAddress(config, process.argv[2]);
const to = utils.getInstanceAddress(config, process.argv[3]);
const fn = process.argv[4];
let args = utils.getArguments(config, process.argv[5]);

const client = rskapi.client(config.host);

(async function() {
    const result = await client.call(from, to, fn, args);
    console.log('result', result);
})();

