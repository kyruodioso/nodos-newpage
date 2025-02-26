import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logoSolsteinn.png";

export default function Logo() {
  return (
    <Link href="https://solsteinninnovations.com.ar" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo} alt="Cruip Logo" width={52} height={52}  className="rounded-full"/>
    </Link>
  );
}
