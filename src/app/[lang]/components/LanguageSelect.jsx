import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Avatar,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import trFlag from "@/assets/language_icons/tr.svg";
import deFlag from "@/assets/language_icons/de.svg";
import enFlag from "@/assets/language_icons/gb.svg";

export default function LanguageSelect({ lang }) {
  const pathName = usePathname();
  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const selectedLanguage =
    lang === "de" ? (
      <Avatar alt="Germany" className="w-6 h-6" src={deFlag.src} />
    ) : lang === "tr" ? (
      <Avatar alt="turkish" className="w-6 h-6" src={trFlag.src} />
    ) : (
      <Avatar alt="english" className="w-6 h-6" src={enFlag.src} />
    );
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button size="sm" variant="light">
          {selectedLanguage}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="languages">
        <DropdownItem key="en">
          <Link href={redirectedPathName("en")}>
            <div className="flex gap-5">
              <Avatar alt="english" className="w-5 h-5" src={enFlag.src} />
              <p className="text-primary">English</p>
            </div>
          </Link>
        </DropdownItem>
        <DropdownItem key="de">
          <Link href={redirectedPathName("de")}>
            <div className="flex gap-5">
              <Avatar alt="Germany" className="w-5 h-5" src={deFlag.src} />{" "}
              <p className="text-primary">Deutsch</p>
            </div>{" "}
          </Link>
        </DropdownItem>
        <DropdownItem key="tr">
          <Link href={redirectedPathName("tr")}>
            <div className="flex gap-5">
              <Avatar alt="turkish" className="w-5 h-5" src={trFlag.src} />{" "}
              <p className="text-primary">Türkçe</p>
            </div>{" "}
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
