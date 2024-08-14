"use client";
import React from "react";
import Flashcard from "./Flashcard";
import { Button } from "../Buttons";
import CollectionGetter from "./Collection";
import Modal from "../Modal";
import FlashcardsGrid from "./FlashcardsGrid";

export default function FlashcardsPreview({ flashcards }) {
  const [showModal, setShowModal] = React.useState(false);
  const handleSave = () => {
    setShowModal(true);
  };

  return (
    <div className="pb-16">
      {showModal && (
        <Modal>
          <CollectionGetter
            onCancel={() => setShowModal(false)}
            flashcards={flashcards}
          ></CollectionGetter>
        </Modal>
      )}
      <h2 className="my-4 text-2xl font-bold">Flashcards Preview</h2>
      <div className="text-center">
        <FlashcardsGrid flashcards={flashcards} />
        <Button onClick={handleSave} classes="py-2 px-4 text-center m-4 mt-8">
          Save
        </Button>
      </div>
    </div>
  );
}
