/* import { useState, useEffect } from "react";

type SaveCubic = {
    a: number;
    b: number;
    c: number;
    d: number;
};

import { useHistory } from "../hooks/CubicSave.ts";

export const CubicHistory = (solver: SaveCubic) => {
    const { history, add } = useHistory();

    useEffect(() => {
            add({
                a: solver.a,
                b: solver.b,
                c: solver.c,
                d: solver.d,
            });
    }, [solver]);

    return (
        <section className="history">
            <h2>History</h2>
            <table className="">
                <thead className="">
                    <tr>
                        <th className="">a</th>
                        <th className="">b</th>
                        <th className="">c</th>
                        <th className="">d</th>
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

*/

