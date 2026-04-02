import { useState, useRef } from "react";

export const cubicInput = () => {
    console.log("Running Input.tsx");

    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);
    const [c, setC] = useState<number>(0);
    const [d, setD] = useState<number>(0);

    consthandleSubmit = (event: React.FormEvent) => {
      event
    }

    return (
      <header className="container">
        <form>
          <label for="a"> a-value: </label>
          <input type="number" id="a" name="a" required />
          <label for="b"> b-value: </label>
          <input type="number" id="b" name="b" required />
          <label for="c"> c-value: </label>
          <input type="number" id="c" name="c" required />
          <label for="d"> d-value: </label>
          <input type="number" id="d" name="d" required />
          <button type="submit">Save Cubic</button>
          <label for="result">Cubic Equation: </label>
          <span id="result" className="result-text">
            —
          </span>
        </form>
      </header>
    );
  };