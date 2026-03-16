# SPIN71 BET Deployment Instructions on Vercel

This document provides complete instructions for deploying the SPIN71 BET application on Vercel, including environment setup and Solana configuration.

## Prerequisites

- A Vercel account
- Node.js installed on your local machine
- A Solana wallet with sufficient funds to deploy contracts
- Access to the SPIN71 BET codebase

## Environment Setup

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/mdkayaskhan923/web3-casino-game-hub.git
   cd web3-casino-game-hub
   ```

2. **Install Dependencies**  
   Ensure you have installed all the necessary dependencies:  
   ```bash
   npm install
   ```

3. **Create a .env file**  
   Create a `.env` file in the root of the project with the following variables:  
   ```plaintext
   SOLANA_NETWORK=devnet
   SOLANA_WALLET=<Your Wallet Address>
   API_KEY=<Your API Key>
   ```

4. **Set Up Vercel**  
   - Install the Vercel CLI globally if you haven't done so:  
     ```bash
     npm install -g vercel
     ```  
   - Log in to your Vercel account:  
     ```bash
     vercel login
     ```

## Deploying the Application

1. **Deploy to Vercel**  
   Run the following command to deploy your application:  
   ```bash
   vercel
   ```

2. **Follow the Prompts**  
   - Choose the appropriate settings as prompted by the CLI.  
   - Ensure that your environment variables are set correctly during the deployment process.

## Solana Configuration

Ensure your Solana configuration is set up correctly by running:
```bash
solana config get
```
Verify that the correct cluster (devnet) is selected and your wallet is set.
