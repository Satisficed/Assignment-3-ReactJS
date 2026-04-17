import type { Dispatch, SetStateAction } from "react";
// https://www.geeksforgeeks.org/reactjs/react-redux-hooks-useselector-and-usedispatch/

type CubicInputProps = {
  a: number | null;
  setA: Dispatch<SetStateAction<number | null>>;
  b: number | null;
  setB: Dispatch<SetStateAction<number | null>>;
  c: number | null;
  setC: Dispatch<SetStateAction<number | null>>;
  d: number | null;
  setD: Dispatch<SetStateAction<number | null>>;
  result: string;
  handleSubmit: (event: React.FormEvent) => void;
};

export const CubicInput = ({
  a,
  setA,
  b,
  setB,
  c,
  setC,
  d,
  setD,
  result,
  handleSubmit,
}: CubicInputProps) => {
  const allFilled = a !== null && b !== null && c !== null && d !== null;

  return (
    <form onSubmit={handleSubmit}>
      <label> a-value: </label>
      <input
        type="number"
        value={a ?? ""}
        onChange={(e) =>
          setA(e.target.value === "" ? null : Number(e.target.value))
        }
      />
      <label> b-value: </label>
      <input
        type="number"
        value={b ?? ""}
        onChange={(e) =>
          setB(e.target.value === "" ? null : Number(e.target.value))
        }
      />
      <label> c-value: </label>
      <input
        type="number"
        value={c ?? ""}
        onChange={(e) =>
          setC(e.target.value === "" ? null : Number(e.target.value))
        }
      />
      <label> d-value: </label>
      <input
        type="number"
        value={d ?? ""}
        onChange={(e) =>
          setD(e.target.value === "" ? null : Number(e.target.value))
        }
      />
      <label>Result: </label>
      <input type="text" value={result} readOnly />
      <button type="submit" onClick={(event) => !allFilled && event.preventDefault()}>
        Save Cubic
      </button>
    </form>
  );
};
