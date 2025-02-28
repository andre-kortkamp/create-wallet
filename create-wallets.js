const { Keypair } = require("@solana/web3.js");

function createSolanaWallets(count) {
    let wallets = [];
    for (let i = 0; i < count; i++) {
        let wallet = Keypair.generate();
        wallets.push({
            address: wallet.publicKey.toBase58(),
            privateKey: Buffer.from(wallet.secretKey).toString("hex")
        });
    }
    return wallets;
}

const wallets = createSolanaWallets(20);
console.log(wallets);
