import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { MobileMenu } from "@components";

const navItems = [
  { name: "About", href: "#" },
  { name: "Products", href: "#" },
  { name: "Contact", href: "#" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-mongoose-300 pointer-events-auto">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <a href="#">
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
            className="inline-flex items-center justify-center rounded-md text-gray-900"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:bg-satin-linen px-4 rounded-lg"
            >
              {item.name}
            </a>
          ))}
        </div>
        <MobileMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          navItems={navItems}
        />
      </nav>
    </header>
  );
};

export default Header;
