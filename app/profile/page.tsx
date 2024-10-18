"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic, Heart, Share2, MessageSquare, Edit } from 'lucide-react';

const dummyUser = {
  name: "VoiceArtist123",
  avatar: "https://example.com/avatar.jpg",
  bio: "Professional voice artist specializing in character voices and narration.",
  totalSales: 25.5,
  nftsCreated: 15,
  followers: 1200,
  socialLinks: {
    twitter: "https://twitter.com/voiceartist123",
    instagram: "https://instagram.com/voiceartist123",
    youtube: "https://youtube.com/voiceartist123",
  },
};

const dummyNFTs = [
  { id: 1, title: "Epic Narration", price: 0.5, createdAt: "2023-05-15" },
  { id: 2, title: "Cartoon Character Voice Pack", price: 0.8, createdAt: "2023-06-22" },
  { id: 3, title: "Soothing Bedtime Story", price: 0.3, createdAt: "2023-07-10" },
];

export default function Profile() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={dummyUser.avatar} alt={dummyUser.name} />
            <AvatarFallback>{dummyUser.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-3xl">{dummyUser.name}</CardTitle>
            <p className="text-muted-foreground">{dummyUser.bio}</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p>Total Sales: {dummyUser.totalSales} ETH</p>
              <p>NFTs Created: {dummyUser.nftsCreated}</p>
              <p>Followers: {dummyUser.followers}</p>
            </div>
            <div className="space-x-2">
              <Button onClick={() => setIsFollowing(!isFollowing)}>
                {isFollowing ? 'Unfollow' : 'Follow'}
              </Button>
              <Button variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" /> Contact
              </Button>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" /> Share
              </Button>
            </div>
          </div>
          <div className="flex space-x-4">
            {Object.entries(dummyUser.socialLinks).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">{platform}</Button>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="nfts">
        <TabsList>
          <TabsTrigger value="nfts">NFTs</TabsTrigger>
          <TabsTrigger value="collections">Collections</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="nfts">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyNFTs.map((nft) => (
              <Card key={nft.id}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mic className="mr-2" />
                    {nft.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Price: {nft.price} ETH</p>
                  <p>Created: {nft.createdAt}</p>
                  <div className="flex justify-between mt-4">
                    <Button variant="outline">
                      <Heart className="mr-2 h-4 w-4" /> Like
                    </Button>
                    <Link href={`/profile/nft/${nft.id}`}>
                      <Button variant="outline">
                        <Edit className="mr-2 h-4 w-4" /> Edit
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="collections">
          <p>Collections content goes here</p>
        </TabsContent>
        <TabsContent value="activity">
          <p>Activity content goes here</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}