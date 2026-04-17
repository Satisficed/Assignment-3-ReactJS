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
        {history.map((row: SaveCubic) => (
          <tr key={row.id}>
            <td>{`History${row.id}`}</td>
            <td>{row.a}</td>
            <td>{row.b}</td>
            <td>{row.c}</td>
            <td>{row.d}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
