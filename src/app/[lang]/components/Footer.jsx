import Image from "next/image";
import Link from "next/link";
import { PiInstagramLogo } from "react-icons/pi";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="w-full flex items-center justify-between p-3 text-xs z-10">
      <div className="text-foreground-300">
        &copy; {year} Deniz Weber Photography. All rights reserved
      </div>
      <div className="flex gap-3">
        <Link href="mailto:bulutyerli@gmail.com">
          <BiLogoGmail size={24} />
        </Link>
        <Link
          href="https://www.instagram.com/deewbr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PiInstagramLogo size={24} />
        </Link>
      </div>
    </footer>
  );
}
