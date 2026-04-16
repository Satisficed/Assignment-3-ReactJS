export type CubicGraphProps = {
  a: number | null;
  b: number | null;
  c: number | null;
  d: number | null;
  x1?: number | string;
  x2?: number | string;
  x3?: number | string;
};

export type SaveCubic = {
  id: number;
  a: number | null;
  b: number | null;
  c: number | null;
  d: number | null;
};
