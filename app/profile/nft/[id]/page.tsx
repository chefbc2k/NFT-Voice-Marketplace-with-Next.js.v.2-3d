"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mic, ArrowLeft } from 'lucide-react';

const dummyNFTs = [
  { id: 1, title: "Epic Narration", price: 0.5, createdAt: "2023-05-15", description: "A powerful narration for epic scenes", smartContract: "0x123...abc" },
  { id: 2, title: "Cartoon Character Voice Pack", price: 0.8, createdAt: "2023-06-22", description: "A collection of fun cartoon character voices", smartContract: "0x456...def" },
  { id: 3, title: "Soothing Bedtime Story", price: 0.3, createdAt: "2023-07-10", description: "A calming bedtime story narration", smartContract: "0x789...ghi" },
];

export default function NFTDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const nftId = parseInt(params.id);
  const nft = dummyNFTs.find(n => n.id === nftId);

  const [title, setTitle] = useState(nft?.title || '');
  const [price, setPrice] = useState(nft?.price.toString() || '');
  const [description, setDescription] = useState(nft?.description || '');
  const [smartContract, setSmartContract] = useState(nft?.smartContract || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically update the NFT data
    console.log({ title, price, description, smartContract });
    // Redirect back to profile page after saving
    router.push('/profile');
  };

  if (!nft) {
    return <div>NFT not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="outline" onClick={() => router.push('/profile')} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Profile
      </Button>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Mic className="mr-2" />
            Edit NFT: {nft.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="price">Price (ETH)</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="smartContract">Smart Contract</Label>
              <Select value={smartContract} onValueChange={setSmartContract}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Smart Contract" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0x123...abc">Contract A (0x123...abc)</SelectItem>
                  <SelectItem value="0x456...def">Contract B (0x456...def)</SelectItem>
                  <SelectItem value="0x789...ghi">Contract C (0x789...ghi)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <p>Created: {nft.createdAt}</p>
              <p>Age: {Math.floor((Date.now() - new Date(nft.createdAt).getTime()) / (1000 * 60 * 60 * 24))} days</p>
            </div>
            <Button type="submit">Save Changes</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}