import { useEffect, useState } from "react";

export type HistoryEntry = {
  id: string;
  a: number;
  b: number;
  c: number;
  d: number;
  result: string;
  createdAt: string;
};

const STORAGE_KEY = "cubicHistory_v1";

export function useHistory() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setHistory(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(history)); } catch {}
  }, [history]);

  const add = (entry: Omit<HistoryEntry, "id" | "createdAt">) => {
    const newEntry: HistoryEntry = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...entry,
    };
    setHistory(prev => [newEntry, ...prev].slice(0, 100));
  };

  const remove = (id: string) => setHistory(prev => prev.filter(e => e.id !== id));
  const clear = () => setHistory([]);

  return { history, add, remove, clear };
}
