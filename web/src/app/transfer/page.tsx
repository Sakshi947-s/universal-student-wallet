"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function Transfer() {
    const { publicKey, sendTransaction } = useWallet();
    const { connection } = useConnection();
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");
    const [status, setStatus] = useState("");

    const handleTransfer = async () => {
        if (!publicKey || !recipient || !amount) return;

        try {
            setStatus("Processing...");
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: new PublicKey(recipient),
                    lamports: parseFloat(amount) * LAMPORTS_PER_SOL,
                })
            );

            const signature = await sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, "processed");
            setStatus(`Success! TX: ${signature}`);
        } catch (error) {
            console.error(error);
            setStatus("Transaction Failed");
        }
    };

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="container mx-auto px-6 py-12 flex justify-center">
                <div className="w-full max-w-md p-8 bg-gray-900 rounded-xl border border-gray-800">
                    <h2 className="text-2xl font-bold mb-6">Global Transfer</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-400 mb-2">Recipient Address</label>
                            <input
                                type="text"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                                placeholder="Solana Wallet Address"
                                value={recipient}
                                onChange={(e) => setRecipient(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 mb-2">Amount (SOL)</label>
                            <input
                                type="number"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500"
                                placeholder="0.00"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>

                        <button
                            onClick={handleTransfer}
                            disabled={!publicKey}
                            className="w-full py-3 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {publicKey ? "Send Instantly" : "Connect Wallet"}
                        </button>

                        {status && <p className="text-center text-sm mt-2 text-gray-400 break-all">{status}</p>}
                    </div>
                </div>
            </div>
        </main>
    );
}
