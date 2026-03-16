export const SPIN71Config = {
  rpc: "https://api.devnet.solana.com",
  gameSettings: {
    minBet: 0.01,
    maxBet: 100,
    houseEdge: 0.05,
  },
  walletAdapters: [
    { name: "Phantom", url: "https://phantom.app" },
    { name: "Sollet", url: "https://www.sollet.io" },
    { name: "Solflare", url: "https://solflare.com" },
  ],
};
