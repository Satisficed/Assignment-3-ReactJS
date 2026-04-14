import { useState } from "react";

export type SaveCubic = { a: number; b: number; c: number; d: number };

export function useHistory() {
  const [history, setHistory] = useState<SaveCubic[]>([]);

  const add = (entry: SaveCubic) => setHistory(h => [entry, ...h]);

  return { history, add };
}
