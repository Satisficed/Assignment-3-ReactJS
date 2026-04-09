import { useEffect, useState } from "react";

type HistoryEntry = {
  a: number;
  b: number;
  c: number;
  d: number;
  x1: number | string;
  x2: number | string;
  x3: number | string;
  y1: number | string;
  y2: number | string;
  y3: number | string;
  
};

export const useHistory = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
}



