import { useRef, useEffect } from "react";

type CubicGraphProps = {
  a: number;
  b: number;
  c: number;
  d: number;
  x1?: number | string;
  x2?: number | string;
  x3?: number | string;
};

export const CubicGraph = ({ a, b, c, d, x1, x2, x3 }: CubicGraphProps) => {
  useEffect(() => {
    const canvas = document.getElementById("graph") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 15x15 grid for canvas graph
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = "grey";
    ctx.beginPath();
    for (let i = 1; i < 30; i++) {
      ctx.moveTo(i * 20, 0);
      ctx.lineTo(i * 20, canvas.height);
      ctx.moveTo(0, i * 20);
      ctx.lineTo(canvas.width, i * 20);
    }
    ctx.stroke();

    // x and y axis
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Cubic Equation line
    ctx.strokeStyle = "darkblue";
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i <= canvas.width; i++) {
      const j =
        canvas.height / 2 -
        (a * ((i - canvas.width / 2) / 20) ** 3 +
          b * ((i - canvas.width / 2) / 20) ** 2 +
          c * ((i - canvas.width / 2) / 20) +
          d) *
          20;
      ctx.lineTo(i, j);
    }
    ctx.stroke();

    // Draw root(s) function and preset
    ctx.fillStyle = "crimson";
    ctx.strokeStyle = "darkred";
    ctx.lineWidth = 1;
    function drawRoot(x: number) {
      ctx.beginPath();
      ctx.arc(x * 20 + canvas.width / 2, canvas.height / 2, 4, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      return;
    }
    
    drawRoot(x1 != null ? Number(x1) : NaN);
    drawRoot(x2? Number(x2) : NaN);
    drawRoot(x3? Number(x3) : NaN);

  }, [a, b, c, d, x1, x2, x3]);

  
  return (
    <div className="graph">
      <canvas id="graph" width="600" height="600"></canvas>
    </div>
  );
};
