import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="w-full flex items-center justify-between p-3 text-xs">
      <div>&copy; {year} Deniz Weber. All rights reserved</div>
      <div className="flex gap-3">
        <Link href="mailto:gmail.com">
          <Image
            src="/gmail.png"
            alt="gmail icon"
            width={32}
            height={32}
          ></Image>
        </Link>
        <Link href="/instagram" target="_blank" rel="noopener noreferrer">
          <Image
            src="/instagram.png"
            alt="gmail icon"
            width={32}
            height={32}
          ></Image>
        </Link>
      </div>
    </footer>
  );
}
