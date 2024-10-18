"use client"

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart } from '@/components/ui/chart';
import { ArrowLeft } from 'lucide-react';

const dummyNFTData = [
  { name: 'Voice Acting', value: 40 },
  { name: 'ASMR', value: 30 },
  { name: 'Nature Sounds', value: 20 },
  { name: 'Impressions', value: 10 },
];

export default function NFTInsights() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">NFT Insights</h2>
        <Link href="/admin/analytics">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Analytics
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>NFT Categories Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <PieChart data={dummyNFTData} />
        </CardContent>
      </Card>

      {/* Add more NFT analytics components here */}
    </div>
  );
}