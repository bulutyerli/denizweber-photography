import Image from "next/image";
import Link from "next/link";
import instagramIcon from "public/instagramicon.png";
import gmailIcon from "public/gmail.png";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="w-full flex items-center justify-between p-3 text-xs">
      <div>&copy; {year} Deniz Weber. All rights reserved</div>
      <div className="flex gap-3">
        <Link href="mailto:gmail.com">
          <Image
            src={gmailIcon}
            alt="gmail icon"
            width={32}
            height={32}
          ></Image>
        </Link>
        <Link href="/instagram" target="_blank" rel="noopener noreferrer">
          <Image
            src={instagramIcon}
            alt="instagram icon"
            width={32}
            height={32}
          ></Image>
        </Link>
      </div>
    </footer>
  );
}
