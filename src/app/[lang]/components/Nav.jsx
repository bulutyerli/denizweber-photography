"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoFlowerOutline, IoBalloon } from "react-icons/io5";
import { LiaBabyCarriageSolid } from "react-icons/lia";
import { PiDress } from "react-icons/pi";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTheme } from "next-themes";
import SiteLogo from "./SiteLogo";
import LanguageSelect from "./LanguageSelect";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav({ navigation, lang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  const { theme } = useTheme();
  const icons = {
    dropdown: <RiArrowDropDownLine fill="currentColor" size={16} />,
    wedding: <IoFlowerOutline fill="currentColor" size={16} />,
    baby: <LiaBabyCarriageSolid fill="currentColor" size={16} />,
    event: <IoBalloon fill="currentColor" size={16} />,
    product: <PiDress fill="currentColor" size={16} />,
  };

  const categories = [
    { key: "wedding", name: navigation.categories.wedding },
    { key: "baby", name: navigation.categories.baby },
    { key: "event", name: navigation.categories.event },
    { key: "product", name: navigation.categories.product },
  ];

  const menuItems = [
    { key: "portfolio", name: navigation.portfolio },
    { key: "about", name: navigation.about, route: `/${lang}/about` },
    { key: "contact", name: navigation.contact, route: `/${lang}/contact` },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      maxWidth="full"
    >
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href={`/${lang}`}>
            <SiteLogo w={150} h={150} theme={theme} />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                color={path.includes("portfolio") ? "secondary" : ""}
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent cursor-pointer"
                startContent={icons.dropdown}
                radius="sm"
                variant="light"
              >
                {navigation.portfolio}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Categories"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {categories.map((category) => (
              <DropdownItem
                as={Link}
                href={`/${lang}/portfolio/${category.key}`}
                key={category.key}
                startContent={icons[category.key]}
              >
                {category.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <NavbarItem isActive={path === `/${lang}/about`}>
          <Link
            color={path === `/${lang}/about` ? "secondary" : ""}
            href={`/${lang}/about`}
          >
            {navigation.about}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={path === `/${lang}/contact`}>
          <Link
            color={path === `/${lang}/contact` ? "secondary" : ""}
            href={`/${lang}/contact`}
          >
            {navigation.contact}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:flex" justify="end">
        <NavbarItem>
          <LanguageSelect lang={lang} />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            isActive={path === `/${lang}/${item.key}`}
            key={index}
          >
            <Link
              color={"foreground"}
              className="w-full"
              href={`/${lang}/${item.key}`}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
