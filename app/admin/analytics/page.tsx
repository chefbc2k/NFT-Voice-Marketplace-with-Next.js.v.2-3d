"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, PieChart } from '@/components/ui/chart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const dummyData = {
  salesOverTime: [
    { name: 'Jan', total: 1000 },
    { name: 'Feb', total: 1500 },
    { name: 'Mar', total: 2000 },
    { name: 'Apr', total: 2500 },
    { name: 'May', total: 3000 },
  ],
  topCategories: [
    { name: 'Voice Acting', value: 40 },
    { name: 'ASMR', value: 30 },
    { name: 'Nature Sounds', value: 20 },
    { name: 'Impressions', value: 10 },
  ],
  userGrowth: [
    { name: 'Week 1', users: 100 },
    { name: 'Week 2', users: 200 },
    { name: 'Week 3', users: 300 },
    { name: 'Week 4', users: 400 },
  ],
};

export default function MarketplaceAnalytics() {
  const [dateRange, setDateRange] = useState('30d');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Marketplace Analytics</h2>
        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select date range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
            <SelectItem value="1y">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New NFTs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+180 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Sale Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$345.67</div>
            <p className="text-xs text-muted-foreground">-3% from last week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="nfts">NFTs</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Sales Over Time</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <LineChart data={dummyData.salesOverTime} />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Top Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart data={dummyData.topCategories} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="sales">
          <Card>
            <CardHeader>
              <CardTitle>Sales Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add more detailed sales analytics here */}
              <p>Detailed sales analytics content goes here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart data={dummyData.userGrowth} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="nfts">
          <Card>
            <CardHeader>
              <CardTitle>NFT Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Add NFT-specific analytics here */}
              <p>NFT analytics content goes here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex space-x-2">
        <Link href="/admin/analytics/sales">
          <Button variant="outline">Detailed Sales</Button>
        </Link>
        <Link href="/admin/analytics/users">
          <Button variant="outline">User Analytics</Button>
        </Link>
        <Link href="/admin/analytics/nfts">
          <Button variant="outline">NFT Insights</Button>
        </Link>
      </div>
    </div>
  );
}