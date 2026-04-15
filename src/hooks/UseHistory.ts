import { useState } from "react";
import type { SaveCubic } from "../core/types";


export function useHistory() {
  const [history, setHistory] = useState<SaveCubic[]>([]);

  const add = (entry: SaveCubic) => setHistory(h => [entry, ...h]);

  return { history, add };
}
