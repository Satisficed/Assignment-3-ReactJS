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
  a: number;
  b: number;
  c: number;
  d: number;
};
