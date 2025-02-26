"use client";
import { useState } from "react";
import Image from "next/image";
import Spotlight from "@/components/spotlight";

export default function ERPPricingPlans() {
  const [isAnnual, setIsAnnual] = useState(false);

  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

  const plans = [
    {
      name: "Plan Básico",
      monthlyPrice: "$210.000/mes",
      annualPrice: "$2.016.000/año", 
      discount: "Usted ahorra $504.000", 
      features: [
        "Gestión de inventario",
        "Facturación electrónica",
        "Hasta 5 usuarios",
        "1 Depósito",
        "1 punto de venta",
      ],
    },
    {
      name: "Plan Estándar",
      monthlyPrice: "$350.000/mes",
      annualPrice: "$3.360.000/año", 
      discount: "Usted ahorra $840.000", 
      features: [
        "Todas las funciones del Plan Básico",
        "Hasta 10 usuarios",
        "Integración con CRM",
        "Multidepósito",
        "2 puntos de venta",
      ],
    },
    {
      name: "Plan Empresarial",
      monthlyPrice: "$500.000/mes",
      annualPrice: "$4.800.000/año", 
      discount: "Usted ahorra $1.200.000", 
      features: [
        "Todas las funciones del Plan Estándar",
        "+10 usuarios",
        "Multidepósito",
        "Múltiples puntos de venta",
        "Soporte 24/7",
      ],
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Planes de ERP
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Elija el plan que mejor se adapte a su negocio
            </h2>
            <p className="text-lg text-indigo-200/65">
              Nuestro ERP está diseñado para optimizar sus procesos
              empresariales. Seleccione el plan que mejor se ajuste a sus
              necesidades y comienza a transformar su negocio hoy mismo.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-indigo-200">
                Mensual
              </span>
              <button
                onClick={toggleBilling}
                className="relative w-12 h-6 rounded-full bg-gray-700 transition-colors"
              >
                {/* Fondo dinámico (gris o índigo) */}
                <div
                  className={`absolute inset-0 rounded-full transition-colors ${
                    isAnnual ? "bg-indigo-500" : "bg-gray-600"
                  }`}
                ></div>
                {/* Bolita blanca */}
                <div
                  className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    isAnnual ? "translate-x-1" : "translate-x-1"
                  }`}
                  style={{
                    top: "50%",
                    transform: `translateY(-50%) ${
                      isAnnual ? "translateX(24px)" : "translateX(2px)"
                    }`,
                    zIndex: 10, 
                  }}
                ></div>
              </button>
              <span className="text-sm font-medium text-indigo-200">Anual</span>
              <span className="text-sm text-indigo-200/65">
                (Ahorra hasta un 20%)
              </span>
            </div>
          </div>

          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {plans.map((plan, index) => (
              <a
                key={index}
                className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
                href="#0"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  {/* Arrow */}
                  <div
                    className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={9}
                      height={8}
                      fill="none"
                    >
                      <path
                        fill="#F4F4F5"
                        d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
                      />
                    </svg>
                  </div>
                  {/* Image */}
                  <div className="flex justify-center p-6">
                    {index === 0 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="inline-flex stroke-indigo-500"
                        width={100}
                        height={100}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                        />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="inline-flex stroke-indigo-500"
                        width={100}
                        height={100}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                        />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="inline-flex stroke-indigo-500"
                        width={100}
                        height={100}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                        <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          {plan.name}
                        </span>
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-indigo-200">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </h3>
                    {isAnnual && (
                      <p className="mb-2 text-sm text-indigo-200/65">
                        {plan.discount}
                      </p>
                    )}
                    <ul className="mb-4 space-y-2 text-indigo-200/65">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <button className="w-full rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600">
                      Seleccionar Plan
                    </button>
                  </div>
                </div>
              </a>
            ))}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
