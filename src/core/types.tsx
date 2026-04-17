export type CubicValues = {
  a: number | null;
  b: number | null;
  c: number | null;
  d: number | null;
};

export type CubicTableProps = {
  p: number | string;
  q: number | string;
  discriminant: number | string;
  x1: number | string;
  x2: number | string;
  x3: number | string;
  y1: number | string;
  y2: number | string;
  y3: number | string;
};

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
