"use client";
import React from "react";
import TopicGetter from "./TopicGetter";
import FlashcardsPreview from "./FlashcardsPreview";

export default function Flashcards() {
  const [flashcards, setFlashcards] = React.useState([]);

  return (
    <div className="container">
      <TopicGetter setFlashcards={setFlashcards} />
      <FlashcardsPreview flashcards={flashcards} />
    </div>
  );
}
