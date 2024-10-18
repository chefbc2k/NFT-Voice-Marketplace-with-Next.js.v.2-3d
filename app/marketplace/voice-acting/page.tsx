"use client"

import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic } from 'lucide-react';

const voiceActingNFTs = [
  { id: 1, title: "Epic Movie Trailer Voice", price: 0.7, creator: "TrailerVoice" },
  { id: 2, title: "Animated Character Collection", price: 0.8, creator: "CartoonVoices" },
  { id: 3, title: "Video Game NPC Dialogue", price: 0.6, creator: "GameVoiceActor" },
];

export default function VoiceActing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/marketplace">
        <Button variant="outline" className="mb-4">← Back to Marketplace</Button>
      </Link>
      <h1 className="text-4xl font-bold mb-8">Voice Acting</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {voiceActingNFTs.map((nft) => (
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