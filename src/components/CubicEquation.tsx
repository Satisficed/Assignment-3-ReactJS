import { useMemo } from "react";

type CubicEquationProps = {
  a: number | null;
  b: number | null;
  c: number | null;
  d: number | null;
};

export const CubicEquation = ({ a, b, c, d }: CubicEquationProps) => {
  const equation = useMemo(() => {
    const showTerm = (value: number | null): value is number => value != null && value !== 0;
    let parts: string[] = [];
    if (showTerm(a)) parts.push(`${a}x³`);
    if (showTerm(b)) parts.push(`${b > 0 && parts.length > 0 ? " + " : b < 0 ? " - " : ""}${Math.abs(b)}x²`);
    if (showTerm(c)) parts.push(`${c > 0 && parts.length > 0 ? " + " : c < 0 ? " - " : ""}${Math.abs(c)}x`);
    if (showTerm(d)) parts.push(`${d > 0 && parts.length > 0 ? " + " : d < 0 ? " - " : ""}${Math.abs(d)}`);
    return parts.length > 0 ? parts.join("") : "Incomplete equation";
  }, [a, b, c, d]);

  return (
    <div className="equation">
      <label>{equation}</label>
    </div>
  );
};
