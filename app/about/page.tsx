import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About VoiceNFT</h1>
      <div className="space-y-6">
        <p>
          VoiceNFT is a revolutionary platform that brings together voice artists, enthusiasts, and collectors in the world of blockchain technology. Our marketplace allows creators to mint and sell unique voice recordings as Non-Fungible Tokens (NFTs), providing a new way to monetize and appreciate vocal talent.
        </p>
        <p>
          Whether you're a professional voice actor, a budding artist, or simply someone with a unique voice, VoiceNFT offers you the opportunity to turn your vocal creations into valuable digital assets. Collectors can discover and own one-of-a-kind voice recordings, from celebrity impressions to nature sounds, and everything in between.
        </p>
        <p>
          Our platform is built on the principles of transparency, security, and fair compensation for artists. By leveraging blockchain technology, we ensure that each voice NFT is unique, verifiable, and that artists receive royalties for their work in perpetuity.
        </p>
        <p>
          Join us in shaping the future of voice artistry and digital ownership. Welcome to VoiceNFT - where every voice finds its value.
        </p>
        <div className="flex space-x-4 mt-8">
          <Link href="/about/roadmap">
            <Button variant="outline">View Our Roadmap</Button>
          </Link>
          <Link href="/about/partners">
            <Button variant="outline">Our Partners</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}