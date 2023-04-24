import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { MobileMenu } from "../componentExports";

const navItems = [
  { name: "About", href: "#" },
  { name: "Products", href: "#" },
  { name: "Contact", href: "#" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-mongoose-300">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <a href="#" className="-m-1.5 p-1.5">
          <h1 className="font-bold text-3xl">Gabriela Cresta</h1>
          {/* Waiting for logo */}
          {/* <img
            className="h-8 w-auto"
            src=""
            alt=""
          /> */}
        </a>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon
              className="h-6 w-6 hover:text-satin-linen"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navItems={navItems}
      />
    </header>
  );
};

export default Header;
