"use server";
import {
  doc,
  collection,
  getDoc,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../firebase";

export async function collectionExists(email, collectionName) {
  try {
    const userDocRef = doc(collection(db, "users"), email);
    const setDocRef = doc(
      collection(userDocRef, "flashcardSets"),
      collectionName
    );
    const setDocSnap = await getDoc(setDocRef);

    return setDocSnap.exists();
  } catch (error) {
    console.error("Error checking if collection exists:", error);
    throw new Error("Error checking if collection exists");
  }
}
// Save a collection of flashcards for a user
export async function saveCollection(email, collectionName, flashcards) {
  try {
    const userDocRef = doc(collection(db, "users"), email);
    const userDocSnap = await getDoc(userDocRef);

    const batch = writeBatch(db);

    if (userDocSnap.exists()) {
      // User document exists, update the flashcardSets array
      const userData = userDocSnap.data();
      const updatedSets = [
        ...(userData.flashcardSets || []),
        { name: collectionName },
      ];
      batch.update(userDocRef, { flashcardSets: updatedSets });
    } else {
      // User document doesn't exist, create a new one with flashcardSets array
      batch.set(userDocRef, {
        flashcardSets: [{ name: collectionName }],
      });
    }

    const setDocRef = doc(
      collection(userDocRef, "flashcardSets"),
      collectionName
    );
    // Create or update the flashcard set document
    batch.set(setDocRef, { flashcards });

    await batch.commit();

    return { success: true };
  } catch (error) {
    console.error("Error saving flashcards:", error);
    throw new Error("Error saving flashcards");
  }
}
