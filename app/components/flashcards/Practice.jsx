"use client";
import React from "react";
import { Container } from "../ui/craft";
import { titleCase } from "@/app/lib/helpers";
import { FlashcardVerticalRotation } from "./Flashcard";
import EmblaCarousel from "../carousel/EmblaCarousel";
import { Check, X } from "lucide-react";

const OPTIONS = { axis: "y" };

export default function Practice({ title, flashcards }) {
  const SLIDES = flashcards.map((flashcard, index) => {
    const { front, back } = flashcard;
    return <FlashcardVerticalRotation key={index} front={front} back={back} />;
  });

  return (
    <Container className="min-h-screen">
      <div className="mt-24">
        <h1 className="mb-4 text-3xl font-bold">{titleCase(title)}</h1>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </Container>
  );
}
