import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

import {
  BeakerIcon,
  BriefcaseIcon,
  CalculatorIcon,
  GlobeAltIcon,
  DocumentDuplicateIcon,
  CreditCardIcon,
} from '@heroicons/react/24/solid';

export default function Features() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Fondo difuminado */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Características
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Potencia tu negocio con nuestro ERP
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-indigo-200/65">
            Descubre las herramientas que te ayudarán a optimizar tus operaciones, aumentar la eficiencia y escalar tu negocio.
          </p>
        </div>

        {/* Grid de características */}
        <div className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:grid-cols-3">
          {/* Gestión de inventario */}
          <article
            className="group relative rounded-2xl bg-gray-900/50 p-6 transition-all hover:bg-gray-900/75 hover:shadow-lg"
            data-aos="fade-up"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
              <BeakerIcon className="h-6 w-6 fill-indigo-500" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-200">
              Gestión de inventario
            </h3>
            <p className="text-indigo-200/65">
              Optimiza los niveles de stock, rastrea inventario en tiempo real y automatiza los procesos de reposición para reducir costos y mejorar la eficiencia.
            </p>
          </article>

          {/* Gestión de productos */}
          <article
            className="group relative rounded-2xl bg-gray-900/50 p-6 transition-all hover:bg-gray-900/75 hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
              <BriefcaseIcon className="h-6 w-6 fill-indigo-500" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-200">
              Gestión de productos
            </h3>
            <p className="text-indigo-200/65">
              Centraliza catálogos de productos, sincroniza atributos como SKU y precios, y notifica a los interesados sobre cambios en tiempo real.
            </p>
          </article>

          {/* Punto de venta (POS) */}
          <article
            className="group relative rounded-2xl bg-gray-900/50 p-6 transition-all hover:bg-gray-900/75 hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
              <CalculatorIcon className="h-6 w-6 fill-indigo-500" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-200">
              Punto de venta (POS)
            </h3>
            <p className="text-indigo-200/65">
              Valida la disponibilidad de stock, procesa ventas y gestiona pagos de manera fluida en el punto de venta.
            </p>
          </article>

          {/* Integración con E-Commerce */}
          <article
            className="group relative rounded-2xl bg-gray-900/50 p-6 transition-all hover:bg-gray-900/75 hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
              <GlobeAltIcon className="h-6 w-6 fill-indigo-500" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-200">
              Integración con E-Commerce
            </h3>
            <p className="text-indigo-200/65">
              Publica productos en línea, procesa pedidos y confirma pagos directamente desde tu plataforma de comercio electrónico.
            </p>
          </article>

          {/* Procesamiento de pedidos */}
          <article
            className="group relative rounded-2xl bg-gray-900/50 p-6 transition-all hover:bg-gray-900/75 hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
              <DocumentDuplicateIcon className="h-6 w-6 fill-indigo-500" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-200">
              Procesamiento de pedidos
            </h3>
            <p className="text-indigo-200/65">
              Recibe, valida y prepara pedidos de manera eficiente mientras coordinas la logística para una entrega oportuna.
            </p>
          </article>

          {/* Gestión de pagos */}
          <article
            className="group relative rounded-2xl bg-gray-900/50 p-6 transition-all hover:bg-gray-900/75 hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
              <CreditCardIcon className="h-6 w-6 fill-indigo-500" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-200">
              Gestión de pagos
            </h3>
            <p className="text-indigo-200/65">
              Valida y registra pagos de forma segura, genera informes financieros e integra con pasarelas de pago como Stripe o MercadoPago.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}