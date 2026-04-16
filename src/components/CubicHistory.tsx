import type { SaveCubic } from "../core/types";
import { useHistory } from "../hooks/UseHistory";

export const CubicHistory = () => {
  const { history } = useHistory();
  console.log("history", history);
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
          {history.map((entry: SaveCubic, i: number) => (
            <tr key={entry.id ?? `${entry.a ?? "n"}-${entry.b ?? "n"}-${entry.c ?? "n"}-${entry.d ?? "n"}-${i}`}>
              <td>{entry.a ?? "—"}</td>
              <td>{entry.b ?? "—"}</td>
              <td>{entry.c ?? "—"}</td>
              <td>{entry.d ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
