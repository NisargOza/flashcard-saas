import React from "react";
import { getFlashcardSets } from "../../lib/firebase";
import { currentUser } from "@clerk/nextjs/server";
import Cards from "../../components/flashcards/Cards";
import { Container } from "@/app/components/ui/craft";

export default async function FlashcardSets() {
  const user = await currentUser();

  const email = user?.primaryEmailAddress?.emailAddress;
  const flashcardSets = await getFlashcardSets(email);
  console.log(flashcardSets);
  return (
    <Container>
      <h1 className="mb-12 mt-24 text-3xl font-bold">Your Flashcard Sets</h1>
      <Cards flashcardSets={flashcardSets} />
    </Container>
  );
}
