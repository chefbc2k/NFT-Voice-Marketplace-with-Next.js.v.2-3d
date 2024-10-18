"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const dummyMilestones = [
  { id: 1, title: "Launch Voice NFT Marketplace", date: "Q3 2023", progress: 100, completed: true },
  { id: 2, title: "Implement Smart Contracts for Royalties", date: "Q4 2023", progress: 75, completed: false },
  { id: 3, title: "Mobile App Development", date: "Q1 2024", progress: 30, completed: false },
  { id: 4, title: "Integration with Major Wallets", date: "Q2 2024", progress: 10, completed: false },
];

const dummyCommunityFeatures = [
  { id: 1, title: "Live Audio Streaming", votes: 156 },
  { id: 2, title: "Collaborative NFT Creation", votes: 89 },
  { id: 3, title: "AI-powered Voice Generation", votes: 203 },
  { id: 4, title: "Virtual Reality Experiences", votes: 72 },
];

export default function Roadmap() {
  const [communityFeatures, setCommunityFeatures] = useState(dummyCommunityFeatures);

  const handleVote = (id: number, increment: boolean) => {
    setCommunityFeatures(prevFeatures =>
      prevFeatures.map(feature =>
        feature.id === id ? { ...feature, votes: feature.votes + (increment ? 1 : -1) } : feature
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Roadmap</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Planned Features and Releases</h2>
        <div className="space-y-6">
          {dummyMilestones.map((milestone) => (
            <Card key={milestone.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{milestone.title}</span>
                  <span className="text-sm font-normal">{milestone.date}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={milestone.progress} className="mb-2" />
                <p>{milestone.completed ? "Completed" : `${milestone.progress}% complete`}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Community-Suggested Features</h2>
        <div className="space-y-4">
          {communityFeatures.map((feature) => (
            <Card key={feature.id}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <span>Votes: {feature.votes}</span>
                <div>
                  <Button variant="outline" onClick={() => handleVote(feature.id, true)} className="mr-2">
                    <ThumbsUp className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" onClick={() => handleVote(feature.id, false)}>
                    <ThumbsDown className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}