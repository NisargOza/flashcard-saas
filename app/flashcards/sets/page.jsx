import React from 'react';
import { getFlashcardSets } from '../../lib/firebase';
import { currentUser } from '@clerk/nextjs/server';
import Cards from '../../components/flashcards/Cards';

export default async function FlashcardSets() {
  const user = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress;
  const flashcardSets = await getFlashcardSets(email);
  console.log(flashcardSets);
  return (
    <div className="container pt-24">
      <h1 className="my-16 text-3xl font-bold">Your Flashcard Sets</h1>
      <Cards flashcardSets={flashcardSets} />
    </div>
  );
}
