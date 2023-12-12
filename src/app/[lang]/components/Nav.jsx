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
  const [dropDown, setDropDown] = useState(false);
  const path = usePathname();

  const { theme } = useTheme();
  const icons = {
    dropdown: <RiArrowDropDownLine fill="currentColor" size={16} />,
    wedding: <IoFlowerOutline fill="currentColor" size={16} />,
    baby: <LiaBabyCarriageSolid fill="currentColor" size={16} />,
    events: <IoBalloon fill="currentColor" size={16} />,
    products: <PiDress fill="currentColor" size={16} />,
  };

  const categories = [
    { key: "wedding", name: navigation.categories.wedding },
    { key: "baby", name: navigation.categories.baby },
    { key: "events", name: navigation.categories.events },
    { key: "products", name: navigation.categories.products },
  ];

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

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
            <SiteLogo w={175} h={175} theme={theme} />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href={`/${lang}`}>{navigation.home}</Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                color={path.includes("portfolio") ? "secondary" : ""}
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent cursor-pointer"
                endContent={icons.dropdown}
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
        <NavbarMenuItem isActive={path === `/${lang}`}>
          <Link href={`/${lang}`}>{navigation.home}</Link>
        </NavbarMenuItem>
        <NavbarMenuItem
          className="text-md flex flex-col gap-2"
          onClick={handleDropDown}
          isActive={dropDown}
        >
          <div className={`flex gap-2 ${dropDown && "text-secondary"}`}>
            {navigation.portfolio}
            <RiArrowDropDownLine size={24} />
          </div>

          {dropDown && (
            <ul className="mb-5 ml-5 font-normal">
              {categories.map((category) => (
                <li key={category.key}>
                  <Link
                    className="pb-2"
                    as={Link}
                    href={`/${lang}/portfolio/${category.key}`}
                    startContent={icons[category.key]}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </NavbarMenuItem>
        <NavbarMenuItem isActive={path === `/${lang}/about`}>
          <Link
            color={path === `/${lang}/about` ? "secondary" : ""}
            href={`/${lang}/about`}
          >
            {navigation.about}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem isActive={path === `/${lang}/contact`}>
          <Link
            color={path === `/${lang}/contact` ? "secondary" : ""}
            href={`/${lang}/contact`}
          >
            {navigation.contact}
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
