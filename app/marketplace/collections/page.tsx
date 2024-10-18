"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Users, Mic } from 'lucide-react';

const dummyCollections = [
  { id: 1, name: "Nature's Symphony", creator: "EarthSounds", totalValue: 5.2, nftCount: 10, floorPrice: 0.3 },
  { id: 2, name: "Voice Acting Legends", creator: "VoiceMasters", totalValue: 8.7, nftCount: 15, floorPrice: 0.5 },
  { id: 3, name: "ASMR Delights", creator: "WhisperWorks", totalValue: 3.9, nftCount: 8, floorPrice: 0.2 },
  { id: 4, name: "Celebrity Impressions", creator: "MimicMasters", totalValue: 6.5, nftCount: 12, floorPrice: 0.4 },
];

export default function Collections() {
  const [featuredCollection, setFeaturedCollection] = useState(dummyCollections[0]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/marketplace">
        <Button variant="outline" className="mb-4">← Back to Marketplace</Button>
      </Link>
      <h1 className="text-4xl font-bold mb-8">Collections</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Collection</h2>
        <Carousel>
          <CarouselContent>
            {dummyCollections.map((collection) => (
              <CarouselItem key={collection.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{collection.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Creator: {collection.creator}</p>
                    <p>Total Value: {collection.totalValue} ETH</p>
                    <p>NFTs: {collection.nftCount}</p>
                    <p>Floor Price: {collection.floorPrice} ETH</p>
                  </CardContent>
                  <CardFooter>
                    <Button>View Collection</Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyCollections.map((collection) => (
          <Card key={collection.id}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mic className="mr-2" />
                {collection.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Creator: {collection.creator}</p>
              <p>Total Value: {collection.totalValue} ETH</p>
              <p>NFTs: {collection.nftCount}</p>
              <p>Floor Price: {collection.floorPrice} ETH</p>
            </CardContent>
            <CardFooter>
              <Button>View Collection</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button>
          <Users className="mr-2 h-4 w-4" /> Create Collection
        </Button>
      </div>
    </div>
  );
}