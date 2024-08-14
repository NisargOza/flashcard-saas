"use client";
import React, { useState } from "react";
import { Button, LoadingButton } from "../Buttons";
import Input from "../Input";
import { generateFlashcards } from "../../lib/http";
import { useUser } from "@clerk/nextjs";

export default function TopicGetter({ setFlashcards }) {
  const [topic, setTopic] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const { user, isLoaded } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFlashcards([]);
    setError(null);

    if (topic === "") {
      setError("Please enter a topic");
      return;
    }

    setIsFetching(true);
    const flashcards = await generateFlashcards(topic);
    setFlashcards(flashcards);
    setIsFetching(false);
    setTopic("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-4 flex flex-col items-center gap-4 rounded-md border-2 border-gray-300 py-12"
    >
      <h1 className="text-center text-2xl font-bold md:text-3xl">
        Hi{" "}
        {isLoaded ? (
          <span className="text-gray-700">{user?.firstName}</span>
        ) : (
          <span className="inline-block w-16 animate-pulse bg-gray-500 text-transparent">
            Loading...
          </span>
        )}
        😄! What do you want to study?
      </h1>

      <Input
        name="topic"
        placeholder="E.g: Programming Languages"
        classes="py-2 px-4 md:w-1/4 w-3/4"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        error={error}
      />
      {!isFetching ? (
        <Button type="submit" classes="py-2 px-6">
          Continue
        </Button>
      ) : (
        <LoadingButton classes="size-6" />
      )}
    </form>
  );
}
