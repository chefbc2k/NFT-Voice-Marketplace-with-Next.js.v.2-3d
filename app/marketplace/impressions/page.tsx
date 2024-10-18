"use client"

import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic } from 'lucide-react';

const impressionsNFTs = [
  { id: 1, title: "Morgan Freeman Impression", price: 0.5, creator: "VoiceArtist1" },
  { id: 2, title: "Arnold Schwarzenegger Voice", price: 0.6, creator: "ImpersonatorPro" },
  { id: 3, title: "Donald Trump Parody", price: 0.4, creator: "PoliticalVoices" },
];

export default function Impressions() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/marketplace">
        <Button variant="outline" className="mb-4">← Back to Marketplace</Button>
      </Link>
      <h1 className="text-4xl font-bold mb-8">Impressions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {impressionsNFTs.map((nft) => (
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