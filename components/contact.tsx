import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-950 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
              Contacto
            </span>
          </div>
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Ponte en contacto con nosotros
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-indigo-200/65">
            ¿Tienes alguna pregunta o necesitas más información? Estamos aquí para ayudarte. Completa el formulario o utiliza nuestros datos de contacto.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Formulario de contacto */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-indigo-200">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-indigo-200 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-indigo-200">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-indigo-200 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="tucorreo@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-indigo-200">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-indigo-200 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Escribe tu mensaje aquí..."
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Enviar mensaje
              </button>
            </div>
          </form>

          {/* Información de contacto */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                <MapPinIcon className="h-6 w-6 text-indigo-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-200">Dirección</h3>
                <p className="text-indigo-200/65">
                  Av. Principal 1234, <br />
                  Ciudad, País
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                <PhoneIcon className="h-6 w-6 text-indigo-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-200">Teléfono</h3>
                <p className="text-indigo-200/65">+1 (234) 567-890</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                <EnvelopeIcon className="h-6 w-6 text-indigo-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-200">Correo electrónico</h3>
                <p className="text-indigo-200/65">info@erpempresa.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}