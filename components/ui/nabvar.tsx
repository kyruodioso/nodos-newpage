import Link from 'next/link';
import { useState } from 'react';

// Definimos los tipos para los props del componente Navbar
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="w-full bg-gray-900 shadow-md sticky top-0 z-50">
      {/* Contenedor principal */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo con animación AOS */}
        <Link
          href="/"
          className="text-2xl font-bold text-custom-purple hover:text-gray-300 transition duration-300"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          NodosERP
        </Link>

        {/* Menú en pantallas grandes */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink href="/" text="Home" delay={200} />
          <NavLink href="/caracteristicas" text="Features" delay={400} />
          <NavLink href="/precios" text="Pricing" delay={600} />
          <NavLink href="/demo" text="Demo" delay={800} />
          <NavLink href="/contacto" text="Contact" delay={1200} />
          <NavLink href="/team" text="Team" delay={1400} />
          <NavLink href="/faq" text="FAQ" delay={1600} />
        </div>

        {/* Botón de menú hamburguesa para móviles */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-200 focus:outline-none"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Menú desplegable para móviles */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 py-4 px-6`}
      >
        <MobileNavLink href="/" text="Inicio" delay={200} />
        <MobileNavLink href="/precios" text="Precios" delay={400} />
        <MobileNavLink href="/equipo" text="Equipo" delay={600} />
        <MobileNavLink href="/caracteristicas" text="Características" delay={800} />
        <MobileNavLink href="/blog" text="Blog" delay={1000} />
        <MobileNavLink href="/contacto" text="Contacto" delay={1200} />
      </div>
    </nav>
  );
};

// Componente reutilizable para los enlaces del menú en pantallas grandes
interface NavLinkProps {
  href: string;
  text: string;
  delay: number;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text, delay }) => {
  return (
    <Link
      href={href}
      className="text-base font-medium text-custom-purple hover:text-gray-300 transition duration-300"
      data-aos="fade-right"
      data-aos-delay={`${delay}`}
    >
      {text}
    </Link>
  );
};

// Componente reutilizable para los enlaces del menú móvil
interface MobileNavLinkProps {
  href: string;
  text: string;
  delay: number;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, text, delay }) => {
  return (
    <Link
      href={href}
      className="block text-base font-medium text-custom-purple hover:text-gray-300 transition duration-300 mb-2"
      data-aos="fade-up"
      data-aos-delay={`${delay}`}
    >
      {text}
    </Link>
  );
};

export default Navbar;