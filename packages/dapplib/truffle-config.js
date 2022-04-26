require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remind uncover good kitchen off gaze'; 
let testAccounts = [
"0xed4afae1f617072c2d4ff0cb8ad7992647414571ac42d57261a181c95336c6d7",
"0x43ffde6eedf13ad553ee9d27357ebbc6d9fafb74edcba3de065a3798077b93a1",
"0xa4b5e8f7d7e5136261aa902a7ea3e1a401afcd75ff404bf329858bf2b94c86dc",
"0x032a43d77a079db920cd602c3e7f7a27b931562843a69478f801a10dda375e69",
"0x33cb9e1916bd35759afa2868d43914dd7ea71771dfe64335cd7565643d82dda4",
"0x80c361ca21bc9234a72da6409ca44aa177047f269d68b50aa13bb2d48a88ccd5",
"0x3854acde8eeb64e6295830b5ec5a1318d3d826590fb74ac2368ef63ddfaf2c18",
"0xa4af8ebf0122c3018fa84b4c6abd37814a7dfad25256e62eb9b394ed85f39e82",
"0x3d250dbf9319344eaf69c724f99d3159297ecf3cd862c533c661abdcac9ac50f",
"0x3e24bfa865e0b48780be8bf2f3313addf22aaf300b7d7d4dd5ff39dc92f311a4"
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

