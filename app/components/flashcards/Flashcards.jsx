"use client";
import React from "react";
import TopicGetter from "./TopicGetter";
import FlashcardsPreview from "./FlashcardsPreview";

export default function Flashcards() {
  const [flashcards, setFlashcards] = React.useState([]);

  return (
    <div className="container w-full flex-1">
      <TopicGetter setFlashcards={setFlashcards} />
      {flashcards.length > 0 && <FlashcardsPreview flashcards={flashcards} />}
    </div>
  );
}
