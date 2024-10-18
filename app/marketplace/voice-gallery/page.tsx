"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Mic, Play, Pause } from 'lucide-react';

const dummyNFTs = [
  { id: 1, title: "Soothing Ocean Waves", price: 0.3, creator: "NatureLover", genre: "Nature" },
  { id: 2, title: "Epic Movie Trailer Voice", price: 0.7, creator: "TrailerVoice", genre: "Voice Acting" },
  { id: 3, title: "Relaxing ASMR Collection", price: 0.4, creator: "ASMRArtist", genre: "ASMR" },
  { id: 4, title: "Morgan Freeman Impression", price: 0.5, creator: "VoiceArtist1", genre: "Impressions" },
  { id: 5, title: "Thunderstorm Symphony", price: 0.5, creator: "StormChaser", genre: "Nature" },
  { id: 6, title: "Animated Character Voices", price: 0.8, creator: "CartoonVoices", genre: "Voice Acting" },
];

export default function VoiceGallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1]);
  const [genre, setGenre] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredNFTs = dummyNFTs.filter(nft => 
    nft.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    nft.price >= priceRange[0] && nft.price <= priceRange[1] &&
    (genre === 'all' || nft.genre === genre)
  );

  const sortedNFTs = [...filteredNFTs].sort((a, b) => {
    if (sortBy === 'price_high_to_low') return b.price - a.price;
    if (sortBy === 'price_low_to_high') return a.price - b.price;
    return 0; // 'newest' is default, assuming the array is already sorted by newest
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/marketplace">
        <Button variant="outline" className="mb-4">← Back to Marketplace</Button>
      </Link>
      <h1 className="text-4xl font-bold mb-8">Voice Gallery</h1>

      <div className="mb-8 space-y-4">
        <Input
          placeholder="Search NFTs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <div className="flex gap-4">
          <Select value={genre} onValueChange={setGenre}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genres</SelectItem>
              <SelectItem value="Nature">Nature</SelectItem>
              <SelectItem value="Voice Acting">Voice Acting</SelectItem>
              <SelectItem value="ASMR">ASMR</SelectItem>
              <SelectItem value="Impressions">Impressions</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price_high_to_low">Price: High to Low</SelectItem>
              <SelectItem value="price_low_to_high">Price: Low to High</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="max-w-sm">
          <p className="mb-2">Price Range: {priceRange[0]} ETH - {priceRange[1]} ETH</p>
          <Slider
            min={0}
            max={1}
            step={0.1}
            value={priceRange}
            onValueChange={setPriceRange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedNFTs.map((nft) => (
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
              <p>Genre: {nft.genre}</p>
              <Button variant="outline" className="mt-2">
                <Play className="mr-2 h-4 w-4" /> Preview
              </Button>
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