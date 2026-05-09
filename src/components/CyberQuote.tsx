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
  },
  {
  text: "The quieter you become, the more you are able to hear.",
  author: "Rumi"
},
{
  text: "In the middle of difficulty lies opportunity.",
  author: "Albert Einstein"
},
{
  text: "It always seems impossible until it's done.",
  author: "Nelson Mandela"
},
{
  text: "The future belongs to those who prepare for it today.",
  author: "Malcolm X"
},
{
  text: "Programs must be written for people to read.",
  author: "Harold Abelson"
},
{
  text: "Talk is cheap. Show me the code.",
  author: "Linus Torvalds"
},
{
  text: "First, solve the problem. Then, write the code.",
  author: "John Johnson"
},
{
  text: "Experience is the name everyone gives to their mistakes.",
  author: "Oscar Wilde"
},
{
  text: "The best way to predict the future is to invent it.",
  author: "Alan Kay"
},
{
  text: "Knowledge is power.",
  author: "Francis Bacon"
},
{
  text: "Cybersecurity is much more than a matter of IT.",
  author: "Stephane Nappo"
},
{
  text: "There is no patch for human stupidity.",
  author: "Kevin Mitnick"
},
{
  text: "To know your Enemy, you must become your Enemy.",
  author: "Sun Tzu"
},
{
  text: "Never trust, always verify.",
  author: "Zero Trust Principle"
},
{
  text: "Hackers are not criminals. They are explorers.",
  author: "Anonymous"
},
{
  text: "Without data, you're just another person with an opinion.",
  author: "W. Edwards Deming"
},
{
  text: "Artificial intelligence is the new electricity.",
  author: "Andrew Ng"
},
{
  text: "The science of today is the technology of tomorrow.",
  author: "Edward Teller"
},
{
  text: "Code is like humor. When you have to explain it, it’s bad.",
  author: "Cory House"
},
{
  text: "Simplicity is the soul of efficiency.",
  author: "Austin Freeman"
},
{
  text: "Dream big and dare to fail.",
  author: "Norman Vaughan"
},
{
  text: "Great things never come from comfort zones.",
  author: "Anonymous"
},
{
  text: "Discipline is choosing between what you want now and what you want most.",
  author: "Abraham Lincoln"
},
{
  text: "Stay hungry, stay foolish.",
  author: "Steve Jobs"
},
{
  text: "Success is not final, failure is not fatal.",
  author: "Winston Churchill"
},
{
  text: "The harder you work for something, the greater you'll feel when you achieve it.",
  author: "Anonymous"
},
{
  text: "Your limitation—it’s only your imagination.",
  author: "Anonymous"
},
{
  text: "Small steps every day lead to massive results.",
  author: "Anonymous"
},
{
  text: "The expert in anything was once a beginner.",
  author: "Helen Hayes"
},
{
  text: "Push yourself because no one else is going to do it for you.",
  author: "Anonymous"
},
{
  text: "Learning never exhausts the mind.",
  author: "Leonardo da Vinci"
},
{
  text: "A computer once beat me at chess, but it was no match for me at kick boxing.",
  author: "Emo Philips"
},
{
  text: "Computers are fast; programmers keep it slow.",
  author: "Anonymous"
},
{
  text: "The function of good software is to make the complex appear simple.",
  author: "Grady Booch"
},
{
  text: "Machine intelligence is the last invention humanity will ever need to make.",
  author: "Nick Bostrom"
},
{
  text: "Security used to be an inconvenience sometimes, but now it’s a necessity all the time.",
  author: "Martina Navratilova"
},
{
  text: "Data is the new oil.",
  author: "Clive Humby"
},
{
  text: "Every accomplishment starts with the decision to try.",
  author: "John F. Kennedy"
},
{
  text: "Success usually comes to those who are too busy to be looking for it.",
  author: "Henry David Thoreau"
},
{
  text: "Action is the foundational key to all success.",
  author: "Pablo Picasso"
},
{
  text: "Don't watch the clock; do what it does. Keep going.",
  author: "Sam Levenson"
},
{
  text: "Failure is simply the opportunity to begin again.",
  author: "Henry Ford"
},
{
  text: "You miss 100% of the shots you don’t take.",
  author: "Wayne Gretzky"
},
{
  text: "The journey of a thousand miles begins with one step.",
  author: "Lao Tzu"
},
{
  text: "Doubt kills more dreams than failure ever will.",
  author: "Suzy Kassem"
},
{
  text: "The purpose of our lives is to be happy.",
  author: "Dalai Lama"
},
{
  text: "Hard work beats talent when talent doesn’t work hard.",
  author: "Tim Notke"
},
{
  text: "Be yourself; everyone else is already taken.",
  author: "Oscar Wilde"
},
{
  text: "Innovation distinguishes between a leader and a follower.",
  author: "Steve Jobs"
},
{
  text: "If opportunity doesn’t knock, build a door.",
  author: "Milton Berle"
},
{
  text: "Nothing will work unless you do.",
  author: "Maya Angelou"
},
{
  text: "Success is the sum of small efforts repeated daily.",
  author: "Robert Collier"
},
{
  text: "Do one thing every day that scares you.",
  author: "Eleanor Roosevelt"
},
{
  text: "The beautiful thing about learning is nobody can take it away from you.",
  author: "B.B. King"
},
{
  text: "Work hard in silence, let success make the noise.",
  author: "Frank Ocean"
},
{
  text: "Difficult roads often lead to beautiful destinations.",
  author: "Anonymous"
},
{
  text: "Energy and persistence conquer all things.",
  author: "Benjamin Franklin"
},
{
  text: "An investment in knowledge pays the best interest.",
  author: "Benjamin Franklin"
},
{
  text: "Fear kills more dreams than failure ever will.",
  author: "Suzy Kassem"
},
{
  text: "The only limit to our realization of tomorrow is our doubts of today.",
  author: "Franklin D. Roosevelt"
},
{
  text: "Make each day your masterpiece.",
  author: "John Wooden"
},
{
  text: "Success is walking from failure to failure with no loss of enthusiasm.",
  author: "Winston Churchill"
},
{
  text: "The mind is everything. What you think you become.",
  author: "Buddha"
},
{
  text: "Do not wait for opportunity. Create it.",
  author: "George Bernard Shaw"
},
{
  text: "Fortune favors the brave.",
  author: "Virgil"
},
{
  text: "Be so good they can’t ignore you.",
  author: "Steve Martin"
},
{
  text: "Quality is never an accident.",
  author: "John Ruskin"
},
{
  text: "Every noble work is at first impossible.",
  author: "Thomas Carlyle"
},
{
  text: "Your time is limited, so don’t waste it living someone else’s life.",
  author: "Steve Jobs"
},
{
  text: "Focus on being productive instead of busy.",
  author: "Tim Ferriss"
},
{
  text: "Motivation gets you going, but discipline keeps you growing.",
  author: "John C. Maxwell"
},
{
  text: "A year from now you may wish you had started today.",
  author: "Karen Lamb"
},
{
  text: "Success doesn’t come from what you do occasionally.",
  author: "Marie Forleo"
},
{
  text: "Never stop learning because life never stops teaching.",
  author: "Anonymous"
},
{
  text: "The comeback is always stronger than the setback.",
  author: "Anonymous"
},
{
  text: "Winners are not afraid of losing.",
  author: "Robert Kiyosaki"
},
{
  text: "Sometimes later becomes never. Do it now.",
  author: "Anonymous"
},
{
  text: "One day or day one. You decide.",
  author: "Anonymous"
},
{
  text: "Believe you can and you're halfway there.",
  author: "Theodore Roosevelt"
},
{
  text: "Success is earned, not given.",
  author: "Anonymous"
},
{
  text: "Keep your face always toward the sunshine.",
  author: "Walt Whitman"
},
{
  text: "The only way to do great work is to love what you do.",
  author: "Steve Jobs"
},
{
  text: "Do what you can, with what you have, where you are.",
  author: "Theodore Roosevelt"
},
{
  text: "If you want to shine like the sun, first burn like the sun.",
  author: "A.P.J. Abdul Kalam"
},
{
  text: "Dream is not that which you see while sleeping.",
  author: "A.P.J. Abdul Kalam"
},
{
  text: "Excellence is a continuous process and not an accident.",
  author: "A.P.J. Abdul Kalam"
},
{
  text: "Man needs difficulties because they are necessary to enjoy success.",
  author: "A.P.J. Abdul Kalam"
},
{
  text: "Failure will never overtake me if my determination to succeed is strong enough.",
  author: "Og Mandino"
},
{
  text: "The pain you feel today will be the strength you feel tomorrow.",
  author: "Anonymous"
},
{
  text: "Success begins with self-discipline.",
  author: "Anonymous"
},
{
  text: "Turn your wounds into wisdom.",
  author: "Oprah Winfrey"
},
{
  text: "Be fearless in the pursuit of what sets your soul on fire.",
  author: "Jennifer Lee"
},

// Bhagavad Gita Quotes

{
  text: "You have the right to perform your duty, but not to the fruits of your actions.",
  author: "Lord Krishna"
},
{
  text: "A person can rise through the efforts of his own mind.",
  author: "Lord Krishna"
},
{
  text: "The soul is neither born, and nor does it die.",
  author: "Lord Krishna"
},
{
  text: "Set thy heart upon thy work, but never on its reward.",
  author: "Lord Krishna"
},
{
  text: "There is neither this world, nor the world beyond for the doubting soul.",
  author: "Lord Krishna"
},
{
  text: "Calmness, gentleness, silence, self-restraint and purity are the disciplines of the mind.",
  author: "Lord Krishna"
},
{
  text: "One who sees inaction in action, and action in inaction, is intelligent among men.",
  author: "Lord Krishna"
},
{
  text: "The mind acts like an enemy for those who do not control it.",
  author: "Lord Krishna"
},
{
  text: "Perform your obligatory duty, because action is indeed better than inaction.",
  author: "Lord Krishna"
},
{
  text: "Change is the law of the universe.",
  author: "Lord Krishna"
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
