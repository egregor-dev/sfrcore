var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('cf0567ea'),
  addressVersion: 0x3f,
  privKeyVersion: 177,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('c45d47fcd69aa1cb32c5ee2c3bc6cac36d4893ada41d9fa4babaa48c32010000'),
    merkle_root: hex('4fd7fac8a63c580f230c488bf97c1620adc7ae51dab6afa04309b2a19e63fe7f'),
    height: 0,
    nonce: 281729,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1398645614,
    bits: 504365055,
  },
  dnsSeeds: [
    'saffroncoin.com',
    '182.18.175.110'
  ],
  defaultClientPort: 19717
};


exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
