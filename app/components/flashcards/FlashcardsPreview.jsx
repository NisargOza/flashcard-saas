import React from "react";
import Flashcard from "./Flashcard";

export default function FlashcardsPreview({ flashcards }) {
  return (
    <div className="py-16">
      <h2 className="text-2xl font-bold">Flashcards Preview</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {flashcards.map((flashcard, index) => {
          return (
            <div key={index} className="h-56">
              <Flashcard front={flashcard.front} back={flashcard.back} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
