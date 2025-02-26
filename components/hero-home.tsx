import Image from "next/image";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Contenido principal */}
        <div className="py-12 md:py-20">
          {/* Encabezado de sección */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Nodos<span className="text-blue-600">ERP</span> System
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Optimice las operaciones de su negocio con NodosERP, la solución all-in-one diseñada para mejorar la eficiencia, facilitar la toma de decisiones e impulsar el crecimiento.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[1104px] h-[576px]">
              <Image
                className="rounded-2xl object-cover"
                src={"/images/nodosExample2.png"}
                layout="fill"
                objectFit="cover"
                alt="platform image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
