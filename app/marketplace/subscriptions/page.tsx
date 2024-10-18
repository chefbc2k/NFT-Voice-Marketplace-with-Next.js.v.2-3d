"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Star } from 'lucide-react';

const subscriptionTiers = [
  {
    id: 1,
    name: "Basic",
    price: 9.99,
    benefits: ["Access to basic voice NFTs", "Monthly newsletter", "Community forum access"],
    popular: false,
  },
  {
    id: 2,
    name: "Pro",
    price: 19.99,
    benefits: ["Access to all voice NFTs", "Priority customer support", "Exclusive webinars", "Early access to new features"],
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: 49.99,
    benefits: ["Custom voice NFT creation", "Dedicated account manager", "API access", "White-label options"],
    popular: false,
  },
];

export default function Subscriptions() {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/marketplace">
        <Button variant="outline" className="mb-4">← Back to Marketplace</Button>
      </Link>
      <h1 className="text-4xl font-bold mb-8">Subscriptions & Memberships</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {subscriptionTiers.map((tier) => (
          <Card key={tier.id} className={tier.popular ? "border-primary" : ""}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {tier.name}
                {tier.popular && <Badge>Most Popular</Badge>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">${tier.price}/month</p>
              <ul className="space-y-2">
                {tier.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Star className="mr-2 h-4 w-4 text-yellow-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant={tier.popular ? "default" : "outline"}
                onClick={() => setSelectedTier(tier.id)}
              >
                Select Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Gift a Subscription</h2>
        <p className="mb-4">Share the joy of voice NFTs with your friends and family!</p>
        <Button>
          <Gift className="mr-2 h-4 w-4" /> Gift a Subscription
        </Button>
      </div>
    </div>
  );
}