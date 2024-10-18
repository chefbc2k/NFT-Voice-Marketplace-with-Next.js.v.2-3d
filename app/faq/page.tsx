"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a Voice NFT?",
    answer: "A Voice NFT is a unique digital asset representing a voice recording, such as a celebrity impression, nature sound, or any other audio clip. It's stored on the blockchain, ensuring its authenticity and ownership."
  },
  {
    question: "How do I create a Voice NFT?",
    answer: "To create a Voice NFT, go to the 'Create' page, upload your audio file, add a title and description, set a price, and mint your NFT. You'll need a compatible wallet and some cryptocurrency to cover gas fees."
  },
  {
    question: "Can I sell my Voice NFT after purchasing it?",
    answer: "Yes, you can resell Voice NFTs you've purchased. Simply list it on our marketplace, set your desired price, and wait for a buyer."
  },
  {
    question: "What types of voice recordings can be turned into NFTs?",
    answer: "Almost any type of voice recording can be turned into an NFT, including celebrity impressions, voice acting samples, nature sounds, ASMR, podcasts snippets, and more. The key is uniqueness and quality."
  },
  {
    question: "How are royalties handled for Voice NFTs?",
    answer: "Creators receive a percentage of each secondary sale as royalties. This percentage is set during the minting process and is automatically enforced by the smart contract."
  }
];

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}