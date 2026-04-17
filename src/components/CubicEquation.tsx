import { useMemo } from "react";
import type { CubicValues } from "../core/types";


export const CubicEquation = ({ a, b, c, d }: CubicValues) => {
  const equation = useMemo(() => {
    
    // If input values are zero or null, don't push to array string.
    const showTerm = (value: number | null): value is number => value !== 0 && value !== null;

    let term: string[] = [];
    if (showTerm(a)) term.push(`${a}x³`);
    if (showTerm(b)) term.push(`${b > 0 && term.length > 0 ? " + " : b < 0 ? " - " : ""}${Math.abs(b)}x²`);
    if (showTerm(c)) term.push(`${c > 0 && term.length > 0 ? " + " : c < 0 ? " - " : ""}${Math.abs(c)}x`);
    if (showTerm(d)) term.push(`${d > 0 && term.length > 0 ? " + " : d < 0 ? " - " : ""}${Math.abs(d)}`);
    return term.length > 0 ? term.join("") : "No Equation";
    
  }, [a, b, c, d]);

  return (
    <div className="equation">
      <label>{equation}</label>
    </div>
  );
};
