import { useCubicSolver } from "../hooks/CubicSolver";

export const CubicTable = ({
  p,
  q,
  discriminant,
  x1,
  x2,
  x3,
  y1,
  y2,
  y3,
}: {
  p: number | string;
  q: number | string;
  discriminant: number | string;
  x1: number | string;
  x2: number | string;
  x3: number | string;
  y1: number | string;
  y2: number | string;
  y3: number | string;
}) => {

  return (
    <section
      className="table"
      style={{ display: "grid", justifyContent: "space-between" }}
    >
      <table>
        <tr>
          <th>p</th>
          <td className="ZeroIsA">{p}</td>
        </tr>
        <tr>
          <th>q</th>
          <td className="ZeroIsA">{q}</td>
        </tr>
        <tr>
          <th>Discriminant</th>
          <td className="ZeroIsA">{discriminant}</td>
        </tr>
        <tr>
          <th>Value</th>
          <th>x</th>
          <th>y</th>
        </tr>
        <tr>
          <th>Root 1</th>
          <td className="ZeroIsA">{x1}</td>
          <td className="ZeroIsA">{y1}</td>
        </tr>
        <tr>
          <th>Root 2</th>
          <td className="ZeroIsA">{x2}</td>
          <td className="ZeroIsA">{y2}</td>
        </tr>
        <tr>
          <th>Root 3</th>
          <td className="ZeroIsA">{x3}</td>
          <td className="ZeroIsA">{y3}</td>
        </tr>
      </table>
    </section>
  );
  
};
