import { useState, useEffect } from "react";

export const useCubicSolver = () => {
  // Input coefficients for the cubic equation ax^3 + bx^2 + cx + d = 0
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  // Text summary shown in the UI
  const [result, setResult] = useState("");

  // Depressed cubic coefficients and discriminant for root classification
  const [p, setP] = useState(0);
  const [q, setQ] = useState(0);
  const [discriminant, setDiscriminant] = useState(0);

  // Calculated roots and their corresponding y-values for display
  const [x1, setX1] = useState<number | string>("n/a");
  const [x2, setX2] = useState<number | string>("n/a");
  const [x3, setX3] = useState<number | string>("n/a");
  const [y1, setY1] = useState<number | string>("n/a");
  const [y2, setY2] = useState<number | string>("n/a");
  const [y3, setY3] = useState<number | string>("n/a");

  // Recalculate whenever a, b, c, or d changes.
  // This keeps the table and result text in sync with inputs.
  useEffect(() => {
    if (a === 0) {
      // Not a cubic equation when a is zero.
      setP(0);
      setQ(0);
      setDiscriminant(0);
    } else {
      const calcP = (3 * a * c - b ** 2) / (3 * a ** 2);
      const calcQ =
        (27 * a ** 2 * d - 9 * a * b * c + 2 * b ** 3) / (27 * a ** 3);
      const calcDiscriminant = (calcQ / 2) ** 2 + (calcP / 3) ** 3;
      setP(calcP);
      setQ(calcQ);
      setDiscriminant(calcDiscriminant);
    }

    const res = solveCubic();
    setResult(res);
  }, [a, b, c, d]);

  // Solve the cubic equation using Cardano-style formulas.
  function solveCubic() {
    if (a === 0) {
      console.log("Case 0: a-value is zero");
      setX1("n/a");
      setX2("n/a");
      setX3("n/a");
      setY1("n/a");
      setY2("n/a");
      setY3("n/a");
      return `A is Zero, Not a Cubic`;
    }

    // Depressed cubic parameters
    const calcP = (3 * a * c - b ** 2) / (3 * a ** 2);
    const calcQ =
      (27 * a ** 2 * d - 9 * a * b * c + 2 * b ** 3) / (27 * a ** 3);
    const h = -b / (3 * a); // shift to remove x^2 term
    const calcDiscriminant = (calcQ / 2) ** 2 + (calcP / 3) ** 3;

    if (calcDiscriminant > 0) {
      // One real root and two complex roots.
      console.log("Case 2: 1 Real Root, 2 Complex Roots");
      const u = Math.cbrt(
        -calcQ / 2 + Math.sqrt(Math.abs((calcQ / 2) ** 2 + (calcP / 3) ** 3)),
      );
      const v = Math.cbrt(
        -calcQ / 2 - Math.sqrt(Math.abs((calcQ / 2) ** 2 + (calcP / 3) ** 3)),
      );
      const root1 = u + v + h;
      setX1(root1);
      setX2("n/a");
      setX3("n/a");
      setY1(a * root1 ** 3 + b * root1 ** 2 + c * root1 + d);
      setY2("n/a");
      setY3("n/a");
      return `1 Real Root: ${root1}`;
    } else if (calcDiscriminant < 0) {
      // Three distinct real roots.
      console.log("Case 1: 3 Real Roots");
      const k = 2 * Math.sqrt(-calcP / 3);
      const theta =
        (1 / 3) * Math.acos(-calcQ / (2 * Math.sqrt(-Math.pow(calcP / 3, 3))));
      const root1 = k * Math.cos(theta) + h;
      const root2 = k * Math.cos(theta + (2 * Math.PI) / 3) + h;
      const root3 = k * Math.cos(theta + (4 * Math.PI) / 3) + h;
      setX1(root1);
      setX2(root2);
      setX3(root3);
      setY1(a * root1 ** 3 + b * root1 ** 2 + c * root1 + d);
      setY2(a * root2 ** 3 + b * root2 ** 2 + c * root2 + d);
      setY3(a * root3 ** 3 + b * root3 ** 2 + c * root3 + d);
      return `3 Real Roots: ${root1}, ${root2}, ${root3}`;
    } else {
      // Discriminant is exactly zero, so there are repeated roots.
      if (calcP === 0 && calcQ === 0) {
        // Triple root: all three roots are equal.
        console.log("Case 3: Triple Roots");
        const u = Math.cbrt(
          -calcQ / 2 + Math.sqrt(Math.abs((calcQ / 2) ** 2 + (calcP / 3) ** 3)),
        );
        const v = Math.cbrt(
          -calcQ / 2 - Math.sqrt(Math.abs((calcQ / 2) ** 2 + (calcP / 3) ** 3)),
        );
        const root1 = u + v + h;
        setX1(root1);
        setX2(root1);
        setX3(root1);
        setY1(a * root1 ** 3 + b * root1 ** 2 + c * root1 + d);
        setY2(a * root1 ** 3 + b * root1 ** 2 + c * root1 + d);
        setY3(a * root1 ** 3 + b * root1 ** 2 + c * root1 + d);
        return `Triple Root: ${root1}`;
      } else if (calcP !== 0) {
        // One single root and one double root.
        console.log("Case 4: 1 Real Root, Double Roots");
        const u = Math.cbrt(
          -calcQ / 2 + Math.sqrt(Math.abs((calcQ / 2) ** 2 + (calcP / 3) ** 3)),
        );
        const v = Math.cbrt(
          -calcQ / 2 - Math.sqrt(Math.abs((calcQ / 2) ** 2 + (calcP / 3) ** 3)),
        );
        const root1 = u + v + h;
        const root2 = Math.cbrt(calcQ / 2) + h;
        setX1(root1);
        setX2(root2);
        setX3(root2);
        setY1(a * root1 ** 3 + b * root1 ** 2 + c * root1 + d);
        setY2(a * root2 ** 3 + b * root2 ** 2 + c * root2 + d);
        setY3(a * root2 ** 3 + b * root2 ** 2 + c * root2 + d);
        return `1 Real Root: ${root1}, Double Root: ${root2}`;
      } else {
        setX1("n/a");
        setX2("n/a");
        setX3("n/a");
        setY1("n/a");
        setY2("n/a");
        setY3("n/a");
        return "Case 5: Unexpected Result";
      }
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const solution = solveCubic();
    setResult(solution);
  };

  return {
    a,
    b,
    c,
    d,
    p,
    q,
    discriminant,
    x1,
    x2,
    x3,
    y1,
    y2,
    y3,
    setA,
    setB,
    setC,
    setD,
    result,
    handleSubmit,
  };
};
