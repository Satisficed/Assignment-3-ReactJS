type CubicEquationProps = {
  a: number;
  b: number;
  c: number;
  d: number;
};

export const CubicEquation = ({ a, b, c, d }: CubicEquationProps) => {

  return (
    console.log(`Cubic Equation: ${a}x^3 + ${b}x^2 + ${c}x + ${d}`),
    <div className="equation">
      <label>
        {a !== 0 && `${a}x³`}
        {b !== 0 && `${b > 0 ? " + " : " - "}${Math.abs(b)}x²`}
        {c !== 0 && `${c > 0 ? " + " : " - "}${Math.abs(c)}x`}
        {d !== 0 && `${d > 0 ? " + " : " - "}${Math.abs(d)}`}
      </label>
    </div>
  );
};
