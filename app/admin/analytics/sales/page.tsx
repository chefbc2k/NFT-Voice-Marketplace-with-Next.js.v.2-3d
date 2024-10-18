"use client"

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart } from '@/components/ui/chart';
import { ArrowLeft } from 'lucide-react';

const dummySalesData = [
  { name: 'Jan', total: 1000 },
  { name: 'Feb', total: 1500 },
  { name: 'Mar', total: 2000 },
  { name: 'Apr', total: 2500 },
  { name: 'May', total: 3000 },
  { name: 'Jun', total: 3500 },
];

export default function DetailedSales() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Detailed Sales Analytics</h2>
        <Link href="/admin/analytics">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Analytics
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sales Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart data={dummySalesData} />
        </CardContent>
      </Card>

      {/* Add more detailed sales analytics components here */}
    </div>
  );
}