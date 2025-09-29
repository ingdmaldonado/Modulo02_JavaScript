"use client";
import { useState } from "react";

export default function Page() {
  const [contador, setContador] = useState(0);

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Ejercicio 01 — Contador simple (con Tailwind)
      </h1>

      <p className="mb-4 text-lg">
        Valor actual:{" "}
        <span className="font-mono text-blue-600">{contador}</span>
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => setContador(contador - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
         Restar -1
        </button>
        <button
          onClick={() => setContador(contador + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Sumar +1
        </button>
      </div>
    </main>
  );
}
