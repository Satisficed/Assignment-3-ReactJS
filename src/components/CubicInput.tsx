import type { Dispatch, SetStateAction } from "react";

type CubicInputProps = {
  a: number;
  setA: Dispatch<SetStateAction<number>>;
  b: number;
  setB: Dispatch<SetStateAction<number>>;
  c: number;
  setC: Dispatch<SetStateAction<number>>;
  d: number;
  setD: Dispatch<SetStateAction<number>>;
  result: string;
  handleSubmit: (event: React.FormEvent) => void;
};

export const CubicInput = ({ a, setA, b, setB, c, setC, d, setD, result, handleSubmit }: CubicInputProps) => {

  return (
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
      <label>Result: </label>
      <input type="text" value={result} readOnly />
      <button type="submit">Save Cubic</button>
    </form>
  );
};