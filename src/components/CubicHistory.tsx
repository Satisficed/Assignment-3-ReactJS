import { useState, useEffect } from "react";

type SaveCubic = {
    a: number;
    b: number;
    c: number;
    d: number;
    x1: number | string;
    x2: number | string;
    x3: number | string;
    y1: number | string;
    y2: number | string;
    y3: number | string;
};

import { useHistory } from "../hooks/CubicSave.ts";

export const CubicHistory = (solver: SaveCubic) => {
    const { history, add, remove, clear } = useHistory();

    useEffect(() => {
        if (solver.x1 !== "N/A") {
            add({
                a: solver.a,
                b: solver.b,
                c: solver.c,
                d: solver.d,
                x1: solver.x1,  
                x2: solver.x2,
                x3: solver.x3,
                y1: solver.y1,
                y2: solver.y2,
                y3: solver.y3,
                result: `Roots: ${solver.x1}, ${solver.x2}, ${solver.x3}`,
            });
        }
    }, [solver]);

    return (
        <section className="history">
            <h2>History</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coefficients</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roots</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {history.map(entry => (
                        <tr key={entry.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.createdAt}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">a={entry.a}, b={entry.b}, c={entry.c}, d={entry.d}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.result}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}


