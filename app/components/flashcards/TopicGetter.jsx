"use client";
import React from "react";
import { Button, LoadingButton } from "../Buttons";
import Input from "../Input";
import { fetchFlashcards } from "@/app/lib/http";

export default function TopicGetter({ setFlashcards }) {
  const [topic, setTopic] = React.useState("");
  const [isFetching, setIsFetching] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    setFlashcards([]);
    const flashcards = await fetchFlashcards(topic);
    setFlashcards(flashcards);
    setIsFetching(false);
    setTopic("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-4 flex flex-col items-center gap-4 rounded-md border-2 border-gray-300 py-16"
    >
      <h1 className="text-3xl font-bold">What do you want to study?</h1>
      <Input
        name="topic"
        placeholder="E.g: Programming Languages"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      {!isFetching ? (
        <Button type="submit" classes="py-2 px-6">
          Continue
        </Button>
      ) : (
        <LoadingButton classes="py-2 px-6" />
      )}
    </form>
  );
}
