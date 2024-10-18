import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">VoiceNFT</h3>
            <p>Discover and trade unique voice NFTs</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/marketplace">Marketplace</Link></li>
              <li><Link href="/create">Create</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Community Hub</h3>
            <ul className="space-y-2">
              <li><Link href="/community/forums">Discussion Forums</Link></li>
              <li><Link href="/community/social">Social Channels</Link></li>
              <li><Link href="/community/events">Events Calendar</Link></li>
              <li><Link href="/community/content">User-Generated Content</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/roadmap">Roadmap</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 VoiceNFT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;