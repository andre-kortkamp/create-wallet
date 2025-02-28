const { Keypair } = require("@solana/web3.js");
const { generateMnemonic, mnemonicToSeedSync } = require("bip39");
const nacl = require("tweetnacl");

function createSolanaWallets(count) {
    let wallets = [];
    for (let i = 0; i < count; i++) {
        let mnemonic = generateMnemonic();
        let seed = mnemonicToSeedSync(mnemonic).slice(0, 32);
        let keypair = Keypair.fromSeed(seed);
        
        wallets.push({
            address: keypair.publicKey.toBase58(),
            mnemonic: mnemonic
        });
    }
    return wallets;
}

const wallets = createSolanaWallets(20);
console.log(wallets);
