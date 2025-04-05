'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import WalletMultiButton to prevent SSR issues
const WalletMultiButton = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

// Updated Header component using Wallet Adapter
const Header = () => {

  // NOTE: Removed old useState hooks (connected, publicKey, balance, isPhantomAvailable)
  // NOTE: Removed old useState hooks (connected, publicKey, balance, isPhantomAvailable)
  // NOTE: Removed old useEffect hooks and connect/disconnect functions

  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">SolBotX</h1>
        {/* Removed old "Connect Wallet to Start" banner */}
      </div>

      <div className="flex items-center">
        {/* Removed old balance and public key display */}
        {/* Replaced custom buttons with WalletMultiButton */}
        <WalletMultiButton />
      </div>
    </header>
  );
};

// Removed Phantom type definition as it's no longer needed

export default Header;
