import React from 'react';
import { ConnectButton } from 'thirdweb/react';
import  client  from '../utils/client';
import { inAppWallet, createWallet } from 'thirdweb/wallets';

// Define wallet options
const wallets = [
  inAppWallet({
    auth: {
      options: [
        'google',
        'discord',
        'farcaster',
        'email',
        'phone',
        'coinbase',
        'passkey',
      ],
    },
  }),
  createWallet('io.metamask'),
  createWallet('com.coinbase.wallet'),
  createWallet('me.rainbow'),
  createWallet('io.rabby'),
  createWallet('io.zerion.wallet'),
];

// Header component
const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 text-white">
      <h2 className="text-2xl font-bold -ml-4">Classroom</h2>
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search Topics, project or Narrative"
          aria-label="Search topics, projects, or narratives"
          className="w-full md:w-96 h-11 px-5 py-3 bg-white/5 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
      <div className="ml-8">
        <ConnectButton
          client={client}
          wallets={wallets}
          connectModal={{ size: 'wide' }}
        />
      </div>
    </header>
  );
};

export default Header;