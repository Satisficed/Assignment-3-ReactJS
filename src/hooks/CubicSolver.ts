import { useState } from "react";

export const useCubicSolver = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [result, setResult] = useState("");

  const solveCubic = () => {
    const p = (3 * a * c - b ** 2) / (3 * a ** 2);
    const q = (27 * a ** 2 * d - 9 * a * b * c + 2 * b ** 3) / (27 * a ** 3);
    const h = -b / (3 * a);
    const discriminant = (q / 2) ** 2 + (p / 3) ** 3;

    if (discriminant > 0) {
      console.log("Case 2: 1 Real Root, 2 Complex Roots");
      const u = Math.cbrt(
        -q / 2 + Math.sqrt(Math.abs((q / 2) ** 2 + (p / 3) ** 3)),
      );
      const v = Math.cbrt(
        -q / 2 - Math.sqrt(Math.abs((q / 2) ** 2 + (p / 3) ** 3)),
      );
      const x1 = u + v + h;
      return `1 Real Root: ${x1}`;
    } else if (discriminant < 0) {
      console.log("Case 1: 3 Real Roots");
      const k = 2 * Math.sqrt(-p / 3);
      const theta =
        (1 / 3) * Math.acos(-q / (2 * Math.sqrt(-Math.pow(p / 3, 3))));
      const x1 = k * Math.cos(theta) + h;
      const x2 = k * Math.cos(theta + (2 * Math.PI) / 3) + h;
      const x3 = k * Math.cos(theta + (4 * Math.PI) / 3) + h;
      return `3 Real Roots: ${x1}, ${x2}, ${x3}`;
    } else {
      if (p === 0 && q === 0) {
        console.log("Case 3: Triple Roots");
        const u = Math.cbrt(
          -q / 2 + Math.sqrt(Math.abs((q / 2) ** 2 + (p / 3) ** 3)),
        );
        const v = Math.cbrt(
          -q / 2 - Math.sqrt(Math.abs((q / 2) ** 2 + (p / 3) ** 3)),
        );
        const x1 = u + v + h;
        return `Triple Root: ${x1}`;
      } else if (p != 0) {
        console.log("Case 4: 1 Real Root, Double Roots");
        const u = Math.cbrt(
          -q / 2 + Math.sqrt(Math.abs((q / 2) ** 2 + (p / 3) ** 3)),
        );
        const v = Math.cbrt(
          -q / 2 - Math.sqrt(Math.abs((q / 2) ** 2 + (p / 3) ** 3)),
        );
        const x1 = u + v + h;
        const x2 = Math.cbrt(q / 2) + h;
        return `1 Real Root: ${x1}, Double Root: ${x2}`;
      } else {
        return "Case 5: Unexpected Result";
      }

    }
  };
      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const solution = solveCubic();
        setResult(solution);
      };
  return { a, setA, b, setB, c, setC, d, setD, result, handleSubmit };
};
