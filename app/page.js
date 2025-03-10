"use client";

import { WalletButton } from "xenconnect"; // Import WalletButton

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-500">
      <WalletButton label="Connect Wallet" />
    </div>
  );
}
