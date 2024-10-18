"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from 'lucide-react';
import { toast } from "sonner";

const dummyPartners = [
  { id: 1, name: "AudioTech Solutions", description: "Leading provider of audio processing technology" },
  { id: 2, name: "BlockchainX", description: "Innovative blockchain infrastructure company" },
  { id: 3, name: "VoiceAI Labs", description: "Cutting-edge voice AI research and development" },
];

const dummyCaseStudies = [
  { id: 1, title: "Revolutionizing Audiobook NFTs", partner: "AudioTech Solutions", result: "200% increase in audiobook NFT sales" },
  { id: 2, title: "Secure Royalty Distribution", partner: "BlockchainX", result: "Automated and transparent royalty payments for artists" },
];

export default function Partners() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, company, message });
    toast.success("Partnership inquiry submitted successfully!");
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/about">
        <Button variant="outline" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to About
        </Button>
      </Link>
      <h1 className="text-4xl font-bold mb-8">Partners and Collaborations</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Strategic Partnerships</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dummyPartners.map((partner) => (
            <Card key={partner.id}>
              <CardHeader>
                <CardTitle>{partner.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Case Studies</h2>
        <div className="space-y-6">
          {dummyCaseStudies.map((study) => (
            <Card key={study.id}>
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Partner: {study.partner}</p>
                <p>Result: {study.result}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Partnership Inquiry</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Submit Inquiry</Button>
        </form>
      </div>
    </div>
  );
}