import React from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: "Privacy and security are not optional.",
    author: "Kevin Mitnick"
  },
  {
    text: "Security is always going to be a cat and mouse game because there'll be people out there that are hunting for the zero day award.",
    author: "Kevin Mitnick"
  },
  {
    text: "The only truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room with armed guards.",
    author: "Gene Spafford"
  },
  {
    text: "Security is not a product, but a process.",
    author: "Bruce Schneier"
  }
];

export const CyberQuote = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg border border-green-400/30 my-8">
      <div className="flex items-start">
        <Quote className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
        <div>
          <p className="text-gray-300 italic mb-2">{randomQuote.text}</p>
          <p className="text-green-400 text-sm">- {randomQuote.author}</p>
        </div>
      </div>
    </div>
  );
};