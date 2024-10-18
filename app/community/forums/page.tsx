"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Plus } from 'lucide-react';

const dummyForums = [
  { id: 1, title: "Voice Acting Techniques", posts: 156, lastPost: "2 hours ago" },
  { id: 2, title: "NFT Trading Strategies", posts: 89, lastPost: "1 day ago" },
  { id: 3, title: "Audio Equipment Recommendations", posts: 203, lastPost: "3 hours ago" },
  { id: 4, title: "Copyright and Licensing", posts: 72, lastPost: "5 hours ago" },
];

export default function Forums() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Discussion Forums</h1>
      
      <div className="mb-8 flex gap-4">
        <Input
          placeholder="Search forums..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Topic
        </Button>
      </div>

      <div className="space-y-4">
        {dummyForums.map((forum) => (
          <Card key={forum.id}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2" />
                {forum.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Posts: {forum.posts}</p>
              <p>Last post: {forum.lastPost}</p>
              <Button variant="outline" className="mt-2">View Forum</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}