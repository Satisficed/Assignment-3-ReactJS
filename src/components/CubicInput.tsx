import { useState, useRef } from "react";

export const CubicInput = () => {
  console.log("Running Input.tsx");

  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [d, setD] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  if (a === 0) {
    console.log("Case 0: a-value is zero");
    document
      .querySelectorAll<HTMLTableCellElement>("td.ZeroIsA")
      .forEach((td) => {
        td.textContent = `n/a`;
      });
    return;
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const p = (3 * a * c - b ** 2) / (3 * a ** 2);
    const q = (27 * a ** 2 * d - 9 * a * b * c + 2 * b ** 3) / (27 * a ** 3);
    const h = -b / (3 * a);
    const discriminant = (q / 2) ** 2 + (p / 3) ** 3;
    if (inputRef.current) {
      if (discriminant > 0) {
        console.log("Case 2: 1 Real Root, 2 Complex Roots");
        const u = Math.cbrt(
          -q / 2 + Math.sqrt(Math.abs((q / 2) ** 2 + (p / 3) ** 3))
        );
        const v = Math.cbrt(
          -q / 2 - Math.sqrt(Math.abs((q / 2) ** 2 + (p / 3) ** 3))
        );
        const x1 = u + v + h;
        document
          .querySelectorAll<HTMLTableCellElement>("td.ZeroIsA")
          .forEach((td) => {
            td.textContent = `Imaginary`;
          });
        (
          document.getElementById("x1") as HTMLTableCellElement
        ).textContent = `${x1}`;
        (
          document.getElementById("y1") as HTMLTableCellElement
        ).textContent = `0`;
        // drawRoot(x1);
      } else if (discriminant < 0) {
        console.log("Case 1: 3 Real Roots");
        const k = 2 * Math.sqrt(-p / 3);
        const theta =
          (1 / 3) * Math.acos(-q / (2 * Math.sqrt(-Math.pow(p / 3, 3))));
        const x1 = k * Math.cos(theta) + h;
        const x2 = k * Math.cos(theta + (2 * Math.PI) / 3) + h;
        const x3 = k * Math.cos(theta + (4 * Math.PI) / 3) + h;
        // drawRoot(x1);
        // drawRoot(x2);
        // drawRoot(x3);
      } else {
        if (p === 0 && q === 0) {
          console.log("Case 3: Triple Roots");
          const u = Math.cbrt(
            -q / 2 + Math.sqrt(Math.abs((q / 2) ** 2 + (p / 3) ** 3))
          );
          const v = Math.cbrt(
            -q / 2 - Math.sqrt(Math.abs((q / 2) ** 2 + (p / 3) ** 3))
          );
          const x1 = u + v + h;
          // drawRoot(x1);
        } else if (p != 0) {
          console.log("Case 4: 1 Real Root, Double Roots");
          const u = Math.cbrt(
            -q / 2 + Math.sqrt(Math.abs((q / 2) ** 2 + (p / 3) ** 3))
          );
          const v = Math.cbrt(
            -q / 2 - Math.sqrt(Math.abs((q / 2) ** 2 + (p / 3) ** 3))
          );
          const x1 = u + v + h;
          const x2 = Math.cbrt(q / 2) + h;
          // drawRoot(x2);
          // drawRoot(x1);
        } else {
          console.log("Case 5: Unexpected Result");
        }
      }
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label> a-value: </label>
          <input
            type="number"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            required
          />
          <label> b-value: </label>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            required
          />
          <label> c-value: </label>
          <input
            type="number"
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            required
          />
          <label> d-value: </label>
          <input
            type="number"
            value={d}
            onChange={(e) => setD(Number(e.target.value))}
            required
          />
          <button type="submit">Save Cubic</button>
        </form>
      </div>
    </div>
  );
};
