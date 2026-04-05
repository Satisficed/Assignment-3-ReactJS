import { CubicInput } from "./components/CubicInput.tsx";
import { CubicEquation } from "./components/CubicEquation.tsx";
import { CubicGraph } from "./components/CubicGraph.tsx";

export const App = () => {
  return (
    <>
      <h1>
        <i>Cubic Solver</i>
      </h1>
      <CubicInput />
      <CubicEquation />
    </>
  );
};
