import React from "react";
import { Button } from "../Buttons";
import { DeleteIcon, EditIcon, PlusIcon } from "../Icons";
import { redirect } from "next/navigation";
import { CREATE_FLASHCARDS_URL } from "../../lib/constants";
import Link from "next/link";
import { titleCase } from "../../lib/helpers";

export default function Cards({ flashcardSets }) {
  const handleCreate = async () => {
    redirect(CREATE_FLASHCARDS_URL);
  };

  if (flashcardSets.length === 0) {
    return (
      <div className="flex flex-col items-center text-lg text-gray-500">
        No flashcard sets found. Create one by clicking the button below.
        <Link
          className="mt-4 rounded-md bg-blue-100 p-2 shadow-md hover:brightness-110"
          href={CREATE_FLASHCARDS_URL}
        >
          <PlusIcon classes="size-8" />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {flashcardSets.map((flashcardSet) => {
        const title = titleCase(flashcardSet.id);
        const questions = flashcardSet.flashcards.length;
        return (
          <div
            key={flashcardSet.id}
            className="flex w-full flex-col gap-4 rounded-md bg-zinc-100 p-4 shadow-md hover:cursor-pointer hover:brightness-110"
          >
            <h1 className="flex items-start justify-between gap-4 align-middle text-xl font-bold text-gray-600 md:text-2xl">
              <p>{title}</p>
              <div className="flex justify-end gap-4">
                <Button classes="p-2 bg-gray-500 text-white hover:bg-gray-600">
                  <EditIcon />
                </Button>
                <Button classes="p-2 bg-red-500 text-white hover:bg-red-600">
                  <DeleteIcon />
                </Button>
              </div>
            </h1>
            <div className="w-fit rounded-full bg-zinc-400 px-2 text-sm text-white">
              {questions} questions
            </div>
          </div>
        );
      })}
    </div>
  );
}
