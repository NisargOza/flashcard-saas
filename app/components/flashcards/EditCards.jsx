"use client";
import { useState } from "react";
import { Container } from "../ui/craft";
import { titleCase } from "@/app/lib/helpers";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { VIEW_FLASHCARD_SETS_URL } from "@/app/lib/constants";
import { deleteFlashcardSet, saveCollection } from "@/app/lib/firebase";
import { useUser } from "@clerk/nextjs";

export default function EditCards({ title, flashcards }) {
  const router = useRouter();
  const { user } = useUser();
  const [isSaving, setIsSaving] = useState(false);
  const [flashcardSet, setFlashcardSet] = useState({
    id: titleCase(title),
    flashcards: flashcards,
  });

  async function handleSave() {
    setIsSaving(true);
    // Delete the old flashcard set
    await deleteFlashcardSet(user.primaryEmailAddress?.emailAddress, title);

    // Save the new flashcard set
    await saveCollection(
      user.primaryEmailAddress?.emailAddress,
      flashcardSet.id,
      flashcardSet.flashcards
    );
    setIsSaving(false);

    router.push(VIEW_FLASHCARD_SETS_URL);
  }

  function handleCancel() {
    const url = VIEW_FLASHCARD_SETS_URL + "/" + title;
    router.push(url);
  }

  return (
    <Container className="min-h-screen">
      <div className="mt-24">
        <div className="mb-4 flex w-full items-center justify-end gap-2 text-end">
          <Button onClick={handleCancel} variant="outline">
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isSaving}>
            Save
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          {/* Title */}
          <div className="flex flex-wrap items-center justify-between">
            <h1 className="text-left text-3xl font-bold">
              <input
                className="w-full rounded-none border-b-4 border-gray-700 py-2"
                value={flashcardSet.id}
                onChange={(e) =>
                  setFlashcardSet({ ...flashcardSet, id: e.target.value })
                }
              />
              <div className="text-base">TITLE</div>
            </h1>
          </div>

          {/* Flashcards */}
          {flashcardSet.flashcards.map((flashcard, index) => (
            <Card key={index} className="p-4">
              <CardHeader className="text-xl font-bold">
                {index + 1}
                {". "}
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="text-left text-lg">
                    <textarea
                      className="w-full resize-none overflow-hidden rounded-none border-b-2 border-gray-700"
                      value={flashcard.front}
                      rows={1}
                      onChange={(e) => {
                        const newFlashcards = [...flashcardSet.flashcards];
                        newFlashcards[index].front = e.target.value;
                        setFlashcardSet({
                          ...flashcardSet,
                          flashcards: newFlashcards,
                        });
                      }}
                      onInput={(e) => {
                        e.target.style.height = "auto";
                        e.target.style.height = `${e.target.scrollHeight}px`;
                      }}
                    />
                    <span className="text-sm font-bold">Front</span>
                  </div>

                  <div className="text-left text-lg">
                    <textarea
                      className="w-full resize-y rounded-none border-b-2 border-gray-700 p-2"
                      value={flashcard.back}
                      rows={3}
                      onChange={(e) => {
                        const newFlashcards = [...flashcardSet.flashcards];
                        newFlashcards[index].back = e.target.value;
                        setFlashcardSet({
                          ...flashcardSet,
                          flashcards: newFlashcards,
                        });
                      }}
                      onInput={(e) => {
                        e.target.style.height = "auto";
                        e.target.style.height = `${e.target.scrollHeight}px`;
                      }}
                    />
                    <span className="text-sm font-bold">Back</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}