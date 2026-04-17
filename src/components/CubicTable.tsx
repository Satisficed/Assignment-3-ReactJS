import type { CubicTableProps } from "../core/types";

export const CubicTable = ({
  p,
  q,
  discriminant,
  x1,
  x2,
  x3,
  y1,
  y2,
  y3,
}: CubicTableProps) => {

  return (
<section className="mx-auto max-w-3xl p-4">
  <table className="w-full table-auto border-collapse bg-white shadow-sm">
    <thead>
      <tr className="bg-gray-50">
        <th className="p-3 text-left text-sm font-large text-gray-600">Values</th>
        <th className="p-3 text-left text-sm font-medium text-gray-600">x</th>
        <th className="p-3 text-left text-sm font-medium text-gray-600">y</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-t">
        <th className="p-3 text-left text-sm font-semibold text-gray-700">p</th>
        <td className="p-3 text-sm text-gray-800">{p}</td>
        <td className="p-3 text-sm text-gray-800" />
      </tr>
      <tr className="border-t bg-gray-50">
        <th className="p-3 text-left text-sm font-semibold text-gray-700">q</th>
        <td className="p-3 text-sm text-gray-800">{q}</td>
        <td className="p-3 text-sm text-gray-800" />
      </tr>
      <tr className="border-t">
        <th className="p-3 text-left text-sm font-semibold text-gray-700">Discriminant</th>
        <td className="p-3 text-sm text-gray-800">{discriminant}</td>
        <td className="p-3 text-sm text-gray-800" />
      </tr>

      <tr className="border-t bg-gray-50">
        <th className="p-3 text-left text-sm font-semibold text-gray-700">Root 1</th>
        <td className="p-3 text-sm text-gray-800">{x1}</td>
        <td className="p-3 text-sm text-gray-800">{y1}</td>
      </tr>
      <tr className="border-t">
        <th className="p-3 text-left text-sm font-semibold text-gray-700">Root 2</th>
        <td className="p-3 text-sm text-gray-800">{x2}</td>
        <td className="p-3 text-sm text-gray-800">{y2}</td>
      </tr>
      <tr className="border-t bg-gray-50">
        <th className="p-3 text-left text-sm font-semibold text-gray-700">Root 3</th>
        <td className="p-3 text-sm text-gray-800">{x3}</td>
        <td className="p-3 text-sm text-gray-800">{y3}</td>
      </tr>
    </tbody>
  </table>
</section>
  );
};
