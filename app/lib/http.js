import { GET_FLASHCARDS_ROUTE } from "./constants";

export async function fetchFlashcards(topic) {
  const res = await fetch(GET_FLASHCARDS_ROUTE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ topic }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch flashcards");
  }
  return await res.json();
}
