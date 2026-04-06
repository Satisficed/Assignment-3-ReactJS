import { CubicInput } from "./components/CubicInput.tsx";
import { CubicEquation } from "./components/CubicEquation.tsx";
import { CubicTable } from "./components/CubicTable.tsx";
import { CubicGraph } from "./components/CubicGraph.tsx";
import { useCubicSolver } from "./hooks/CubicSolver";

export const App = () => {
  const solver = useCubicSolver();

  return (
    <>
      <h1>
        <i>Cubic Solver</i>
      </h1>
      <CubicInput {...solver} />
      <CubicEquation {...solver} />
      <CubicTable {...solver} />
      <CubicGraph {...solver} />
    </>
  );
};
