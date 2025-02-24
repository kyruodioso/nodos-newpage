"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";

const metrics = [
  {
    title: "Reducción de costos",
    value: "30%",
    description: "En costos de inventario y almacenamiento.",
    categories: [1, 3],
  },
  {
    title: "Aumento de eficiencia",
    value: "20%",
    description: "En procesos operativos y logísticos.",
    categories: [2, 4],
  },
  {
    title: "Tiempo ahorrado",
    value: "10 horas/semana",
    description: "En tareas administrativas manuales.",
    categories: [1, 5],
  },
  {
    title: "Mejora en decisiones",
    value: "25%",
    description: "En la toma de decisiones financieras.",
    categories: [4, 5],
  },
  {
    title: "Optimización de rutas",
    value: "15%",
    description: "En tiempos de entrega y logística.",
    categories: [3, 5],
  },
  {
    title: "Reducción de suministros",
    value: "40%",
    description: "En costos de compras y suministros.",
    categories: [1, 2],
  },
];

export default function MetricsSection() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Impacto Real
          </h2>
          <p className="text-lg text-indigo-200/65">
            Descubre cómo nuestro ERP ha transformado negocios con resultados medibles.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
          <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
            <button
              className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 1 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
              aria-pressed={category === 1}
              onClick={() => setCategory(1)}
            >
              <span>Eficiencia</span>
            </button>
            <button
              className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 2 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
              aria-pressed={category === 2}
              onClick={() => setCategory(2)}
            >
              <span>Ahorro</span>
            </button>
            <button
              className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${category === 3 ? "relative bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-indigo-500/0),--theme(--color-indigo-500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
              aria-pressed={category === 3}
              onClick={() => setCategory(3)}
            >
              <span>Productividad</span>
            </button>
          </div>
        </div>

        {/* Tarjetas de métricas */}
        <div
          className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
          ref={masonryContainer}
        >
          {metrics.map((metric, index) => (
            <div key={index} className="group">
              <Metric metric={metric} category={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Metric({
  metric,
  category,
}: {
  metric: {
    title: string;
    value: string;
    description: string;
    categories: number[];
  };
  category: number;
}) {
  return (
    <article
      className={`relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ${!metric.categories.includes(category) ? "opacity-30" : ""}`}
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-gray-200">{metric.title}</h3>
        <p className="text-4xl font-bold text-indigo-500">{metric.value}</p>
        <p className="text-indigo-200/65">{metric.description}</p>
      </div>
    </article>
  );
}