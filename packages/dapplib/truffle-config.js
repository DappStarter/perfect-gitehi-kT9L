require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth oval company grace drive equal giggle'; 
let testAccounts = [
"0x107cae66f4acc6274775c899a2e3e26d473b649848c8c4aed35c66827b8aa0a4",
"0xe1568f8d9335157c92680856c0d79e61fdf9f4221d359f1779b72b9333ecb3db",
"0x0f13e4596bc0e19cfe468209d8a282e2aec1669ecb0660e78712b924422496c1",
"0x01a14383d9f04170b99ca747b8573921aae0cbb86cd3e6bc9d5b5be9c6db74d1",
"0x49f6fa42fb67a528fc64aba8ab0943322d4a9dc139ad409046590691a4588e0a",
"0x9604edfed7072ce3dcfaef0b9a0563d5be4dd6bb9b33d28ab008fb419418f1bd",
"0x06924f12c40356b1e8df8c140ee38357f2d81f23d9e86e3973cdeff8350bdb3e",
"0x6e4e35b09b6f8d9545b9ca485c89dbee5fa3359697d60cb388761729c1916ea2",
"0xb3a881b09e395ac64f60fe10f7e1aa2db89cec8eaf5775793c68392d18db2560",
"0x85b745577060f5509706a00b716d52e2003290d2b56e4369a3fc32a6f47cdd95"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

