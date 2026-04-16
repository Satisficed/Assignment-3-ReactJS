import { CubicInput } from "./components/CubicInput.tsx";
import { CubicEquation } from "./components/CubicEquation.tsx";
import { CubicTable } from "./components/CubicTable.tsx";
import { CubicGraph } from "./components/CubicGraph.tsx";
import { useCubicSolver } from "./hooks/CubicSolver";
import { CubicHistory } from "./components/CubicHistory.tsx";

export const App = () => {
  const solver = useCubicSolver();

  return (
    <>
      <header>
        <h1 className="text-3xl font-semibold italic"> Cubic Solver </h1>
      </header>
      <main>
        <section>
          <div>
            <CubicInput
              a={solver.a}
              setA={solver.setA}
              b={solver.b}
              setB={solver.setB}
              c={solver.c}
              setC={solver.setC}
              d={solver.d}
              setD={solver.setD}
              result={solver.result}
              handleSubmit={solver.handleSubmit}
            />
          </div>
          <div>
            <CubicEquation
              a={solver.a}
              b={solver.b}
              c={solver.c}
              d={solver.d}
            />
          </div>
        </section>
        <section>
          <div>
            <CubicTable
              p={solver.p}
              q={solver.q}
              discriminant={solver.discriminant}
              x1={solver.x1}
              x2={solver.x2}
              x3={solver.x3}
              y1={solver.y1}
              y2={solver.y2}
              y3={solver.y3}
            />
          </div>
          <div>
            <CubicGraph
              a={solver.a}
              b={solver.b}
              c={solver.c}
              d={solver.d}
              x1={solver.x1}
              x2={solver.x2}
              x3={solver.x3}
            />
          </div>
        </section>
        <div>
          <CubicHistory />
        </div>
      </main>
    </>
  );
};
