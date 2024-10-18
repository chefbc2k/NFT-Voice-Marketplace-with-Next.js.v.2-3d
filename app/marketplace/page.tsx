"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic, Filter, Search, Users } from 'lucide-react';

const categories = [
  { name: 'Voice Gallery', path: '/marketplace/voice-gallery' },
  { name: 'Collections', path: '/marketplace/collections' },
  { name: 'ASMR', path: '/marketplace/asmr' },
  { name: 'Impressions', path: '/marketplace/impressions' },
  { name: 'Voice Acting', path: '/marketplace/voice-acting' },
  { name: 'Nature Sounds', path: '/marketplace/nature-sounds' },
  { name: 'Subscriptions', path: '/marketplace/subscriptions' },
];

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">NFT Voice Marketplace</h1>
      
      <div className="mb-8">
        <div className="flex gap-4 mb-4">
          <Input
            placeholder="Search NFTs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Button variant="outline">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
        </div>
      </div>

      <Tabs defaultValue="voice-gallery">
        <TabsList>
          <TabsTrigger value="voice-gallery">Voice Gallery</TabsTrigger>
          <TabsTrigger value="collections">Collections</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
        </TabsList>
        <TabsContent value="voice-gallery">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.filter(cat => cat.name !== 'Subscriptions').map((category) => (
              <Card key={category.name}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mic className="mr-2" />
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Explore unique {category.name.toLowerCase()} NFTs</p>
                </CardContent>
                <CardFooter>
                  <Link href={category.path}>
                    <Button>Browse {category.name}</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="collections">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Featured Collections</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore curated collections from top artists</p>
              </CardContent>
              <CardFooter>
                <Link href="/marketplace/collections">
                  <Button>View Collections</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="subscriptions">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2" />
                  Subscriptions & Memberships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Unlock premium features and exclusive content</p>
              </CardContent>
              <CardFooter>
                <Link href="/marketplace/subscriptions">
                  <Button>View Plans</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}