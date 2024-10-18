"use client"

import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic } from 'lucide-react';

const asmrNFTs = [
  { id: 1, title: "Relaxing ASMR Collection", price: 0.4, creator: "ASMRArtist" },
  { id: 2, title: "Tingly Whispers Compilation", price: 0.5, creator: "WhisperMaster" },
  { id: 3, title: "Soothing Tapping Sounds", price: 0.3, creator: "TapperExtraordinaire" },
];

export default function ASMR() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/marketplace">
        <Button variant="outline" className="mb-4">← Back to Marketplace</Button>
      </Link>
      <h1 className="text-4xl font-bold mb-8">ASMR</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {asmrNFTs.map((nft) => (
          <Card key={nft.id}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mic className="mr-2" />
                {nft.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Creator: {nft.creator}</p>
              <p>Price: {nft.price} ETH</p>
            </CardContent>
            <CardFooter>
              <Button>Buy Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}