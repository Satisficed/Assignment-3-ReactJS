import type { SaveCubic } from "../core/types";
import { useHistory } from "../hooks/UseHistory";

export const CubicHistory = () => {
  const { history } = useHistory();

  return (
    <table className="history-table">
      <thead>
        <tr>
          <th>History</th>
          <th>a</th>
          <th>b</th>
          <th>c</th>
          <th>d</th>
        </tr>
      </thead>
      <tbody>
        {history.map((entry: SaveCubic) => (
          <tr key={entry.id}>
            <td>{`History${entry.id}`}</td>
            <td>{entry.a}</td>
            <td>{entry.b}</td>
            <td>{entry.c}</td>
            <td>{entry.d}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
