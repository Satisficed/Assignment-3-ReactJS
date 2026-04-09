import { useState, useEffect, useRef, useMemo } from "react";
import { CubicInput } from "./components/CubicInput.tsx";
import { CubicEquation } from "./components/CubicEquation.tsx";
import { CubicTable } from "./components/CubicTable.tsx";
// import { CubicHistory } from "./components/CubicHistory.tsx";
import { CubicGraph } from "./components/CubicGraph.tsx";
import { useCubicSolver } from "./hooks/CubicSolver";

export const App = () => {
  const solver = useCubicSolver();

  return (
    <>
        <header className="max-w-4xl mx-auto mb-6">
          <h1 className="text-3xl font-semibold italic"> Cubic Solver </h1>
        </header>
        <main className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          <section className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <CubicInput {...solver} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <CubicEquation {...solver} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
            </div>
          </section>
          <section className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <CubicTable {...solver} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow h-72">
              <CubicGraph {...solver} />
            </div>
          </section>
        </main>
    </>
  );
};
