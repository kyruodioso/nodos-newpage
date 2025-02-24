import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function CtaDemo() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo con forma difuminada */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
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
        <div className="bg-linear-to-r from-transparent via-gray-800/50 to-transparent py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            {/* Título */}
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Descubre cómo nuestro ERP puede transformar tu negocio
            </h2>

            {/* Descripción */}
            <p
              className="mx-auto mb-8 max-w-2xl text-lg text-indigo-200/65"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Explora todas las funcionalidades de nuestro ERP con una demostración interactiva. Regístrate ahora y obtén acceso inmediato.
            </p>

            {/* Botón de acción */}
            <div
              className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <a
                className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                href="#0"
              >
                <span className="relative inline-flex items-center">
                  Ver Demo
                  <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}