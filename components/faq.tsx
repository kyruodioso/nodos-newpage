"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué es un ERP y cómo puede ayudar a mi negocio?",
      answer:
        "Un ERP (Enterprise Resource Planning) es un sistema integrado que gestiona los procesos clave de su negocio, como inventario, finanzas, ventas y más. Ayuda a mejorar la eficiencia, reducir costos y tomar decisiones informadas.",
    },
    {
      question: "¿Es difícil implementar un ERP en mi empresa?",
      answer:
        "No, nuestro ERP está diseñado para ser fácil de implementar. Ofrecemos soporte técnico y capacitación para asegurar una transición sin problemas.",
    },
    {
      question: "¿Puedo personalizar el ERP según las necesidades de mi negocio?",
      answer:
        "Sí, nuestro ERP es altamente personalizable. Usted puede adaptar módulos y funcionalidades para que se ajusten a los procesos específicos de su empresa.",
    },
    {
      question: "¿El ERP es compatible con otras herramientas que uso?",
      answer:
        "Sí, nuestro ERP se integra con herramientas populares como Shopify, WooCommerce, Google Workspace y más. Consulte nuestra lista completa de integraciones.",
    },
    {
      question: "¿Qué seguridad ofrece el ERP para mis datos?",
      answer:
        "Utilizamos cifrado de última generación y protocolos de seguridad avanzados para proteger sus datos. Además, realizamos copias de seguridad automáticas y frecuentes.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Fondo difuminado */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="h-[600px] w-[800px] bg-gradient-radial from-indigo-500/10 to-transparent opacity-50" />
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Preguntas Frecuentes
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Resolvemos sus dudas
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-indigo-200/65">
            Aquí encontrará respuestas a las preguntas más comunes sobre nuestro ERP. Si no encuentra lo que busca, contáctenos.
          </p>
        </div>

        {/* Acordeón de preguntas */}
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gray-900/50 backdrop-blur-xs transition-all hover:bg-gray-900/75"
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium text-indigo-200">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <ChevronUpIcon className="h-6 w-6 text-indigo-500" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6 text-indigo-500" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-indigo-200/65">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
