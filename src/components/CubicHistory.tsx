import { useEffect } from "react";
import type { SaveCubic } from "../core/types";
import { useHistory } from "../hooks/UseHistory";

export const CubicHistory = (solver: SaveCubic) => {
  const { history } = useHistory();

  return (
    <section className="history">
      <h2>History</h2>
      <table>
        <thead>
          <tr>
            <th>a</th>
            <th>b</th>
            <th>c</th>
            <th>d</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry: SaveCubic) => (
            <tr key={`${entry.a}-${entry.b}-${entry.c}-${entry.d}`}>
              <td>
                a={entry.a}, b={entry.b}, c={entry.c}, d={entry.d}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
