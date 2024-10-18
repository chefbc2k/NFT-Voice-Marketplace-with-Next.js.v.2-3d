import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter, Discord, Youtube, Instagram } from 'lucide-react';

const socialChannels = [
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/voicenft" },
  { name: "Discord", icon: Discord, url: "https://discord.gg/voicenft" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/voicenft" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/voicenft" },
];

export default function SocialChannels() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Social Channels</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {socialChannels.map((channel) => (
          <Card key={channel.name}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <channel.icon className="mr-2" />
                {channel.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Join our {channel.name} community for the latest updates and discussions!</p>
              <Button asChild>
                <a href={channel.url} target="_blank" rel="noopener noreferrer">
                  Follow us on {channel.name}
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}