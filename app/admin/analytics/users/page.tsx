"use client"

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart } from '@/components/ui/chart';
import { ArrowLeft } from 'lucide-react';

const dummyUserData = [
  { name: 'Week 1', users: 100 },
  { name: 'Week 2', users: 200 },
  { name: 'Week 3', users: 300 },
  { name: 'Week 4', users: 400 },
  { name: 'Week 5', users: 500 },
];

export default function UserAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">User Analytics</h2>
        <Link href="/admin/analytics">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Analytics
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart data={dummyUserData} />
        </CardContent>
      </Card>

      {/* Add more user analytics components here */}
    </div>
  );
}