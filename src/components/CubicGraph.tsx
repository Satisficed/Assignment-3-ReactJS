import { useCubicSolver } from "../hooks/CubicSolver";

export const CubicGraph = () => {
  const { a, b, c, d } = useCubicSolver();

  const canvas = document.getElementById("graph") as HTMLCanvasElement;
  if (!canvas) return;
  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  
  return (
    <div className="graph">
      <canvas id="graph" width="600" height="600"></canvas>
    </div>
  );
};
