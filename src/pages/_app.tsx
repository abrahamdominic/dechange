import React, { useState } from 'react';
import web3, { soulBoundTokenContract } from '@/utils/client';

const App: React.FC = () => {
  const [recipient, setRecipient] = useState<string>('');
  const [tokenId, setTokenId] = useState<string>('');
  
  // Mint SoulBound Token function
  const mintSoulBoundToken = async () => {
    try {
      // Load user's account
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0]; // Use the first account directly

      if (!account) {
        alert('No account found. Please connect to MetaMask.');
        return;
      }

      // Mint the token
      const tx = await soulBoundTokenContract.methods.mint(recipient, tokenId).send({ from: account });
      console.log('Transaction:', tx);
      alert('Token minted successfully!');
    } catch (error) {
      console.error('Error minting token:', error);
      alert('Error minting token');
    }
  };

  return (
    <div>
      <h1>Mint SoulBound Token</h1>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="text"
        placeholder="Token ID"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
      />
      <button onClick={mintSoulBoundToken}>Mint Token</button>
    </div>
  );
};

export default App;
