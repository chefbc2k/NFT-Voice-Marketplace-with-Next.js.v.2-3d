"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mic } from 'lucide-react';
import { toast } from "sonner";

export default function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log({ title, description, price, file });
    toast.success("NFT created successfully!");
    setTitle('');
    setDescription('');
    setPrice('');
    setFile(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Create NFT</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter NFT title"
            required
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your NFT"
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
            placeholder="Set your price"
            required
          />
        </div>
        <div>
          <Label htmlFor="file">Audio File</Label>
          <Input
            id="file"
            type="file"
            accept="audio/*"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          <Mic className="mr-2 h-4 w-4" /> Create NFT
        </Button>
      </form>
    </div>
  );
}