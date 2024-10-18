"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, MapPin } from 'lucide-react';

const dummyEvents = [
  { id: 1, title: "Voice Acting Workshop", date: new Date(2023, 7, 15), location: "Online" },
  { id: 2, title: "NFT Trading Masterclass", date: new Date(2023, 7, 22), location: "New York, NY" },
  { id: 3, title: "VoiceNFT Community Meetup", date: new Date(2023, 8, 5), location: "Los Angeles, CA" },
  { id: 4, title: "Audio Production Seminar", date: new Date(2023, 8, 12), location: "Online" },
];

export default function EventsCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Community Events Calendar</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {dummyEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {event.date.toLocaleDateString()}
                  </p>
                  <p className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    {event.location}
                  </p>
                  <Button variant="outline" className="mt-2">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}