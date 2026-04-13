import { CubicInput } from "./components/CubicInput.tsx";
import { CubicEquation } from "./components/CubicEquation.tsx";
import { CubicTable } from "./components/CubicTable.tsx";
import { CubicGraph } from "./components/CubicGraph.tsx";
import { useCubicSolver } from "./hooks/CubicSolver";

export const App = () => {
  const solver = useCubicSolver();

  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
        <header className="max-w-4xl mx-auto mb-6">
          <h1 className="text-3xl font-semibold italic">Cubic Solver</h1>
        </header>
        <main className="min-h-screen bg-gray-50 text-gray-800 p-6">
          <section className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
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
            <div className="bg-white p-4 rounded-lg shadow">
              <CubicEquation />
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <CubicHistory />
            </div>
          </section>
          <section className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <CubicTable a={solver.a} b={solver.b} c={solver.c} d={solver.d} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow h-72">
              <CubicGraph           
          a={solver.a}
          b={solver.b}
          c={solver.c}
          d={solver.d}
          x1={solver.x1}
          x2={solver.x2}
          x3={solver.x3}/>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
