"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic, Video, Music, FileText, ThumbsUp } from 'lucide-react';

const dummyContent = [
  { id: 1, title: "My First Voice NFT Experience", type: "blog", author: "VoiceArtist123", likes: 45 },
  { id: 2, title: "Voice Acting Tips & Tricks", type: "video", author: "VoiceMaster", likes: 89 },
  { id: 3, title: "Ambient Sounds Collection", type: "audio", author: "SoundScaper", likes: 32 },
  { id: 4, title: "NFT Market Analysis", type: "blog", author: "CryptoAnalyst", likes: 67 },
];

export default function UserGeneratedContent() {
  const [searchTerm, setSearchTerm] = useState('');

  const ContentIcon = ({ type }: { type: string }) => {
    switch (type) {
      case 'blog':
        return <FileText className="mr-2" />;
      case 'video':
        return <Video className="mr-2" />;
      case 'audio':
        return <Music className="mr-2" />;
      default:
        return <Mic className="mr-2" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">User-Generated Content</h1>
      
      <div className="mb-8 flex gap-4">
        <Input
          placeholder="Search content..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button>
          <Mic className="mr-2 h-4 w-4" /> Submit Content
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="blog">Blogs</TabsTrigger>
          <TabsTrigger value="video">Videos</TabsTrigger>
          <TabsTrigger value="audio">Audio</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dummyContent.map((content) => (
              <Card key={content.id}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ContentIcon type={content.type} />
                    {content.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>By: {content.author}</p>
                  <p className="flex items-center">
                    <ThumbsUp className="mr-2 h-4 w-4" /> {content.likes} likes
                  </p>
                  <Button variant="outline" className="mt-2">View Content</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        {/* Add similar TabsContent for other content types */}
      </Tabs>
    </div>
  );
}