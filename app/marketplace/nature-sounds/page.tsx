"use client"

import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic } from 'lucide-react';

const natureSoundsNFTs = [
  { id: 1, title: "Soothing Ocean Waves", price: 0.3, creator: "NatureLover" },
  { id: 2, title: "Rainforest Ambience", price: 0.4, creator: "JungleExplorer" },
  { id: 3, title: "Thunderstorm Symphony", price: 0.5, creator: "StormChaser" },
];

export default function NatureSounds() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/marketplace">
        <Button variant="outline" className="mb-4">← Back to Marketplace</Button>
      </Link>
      <h1 className="text-4xl font-bold mb-8">Nature Sounds</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {natureSoundsNFTs.map((nft) => (
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