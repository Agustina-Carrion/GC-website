import React from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navItems: Array<{ name: string; href?: string }>;
};

const MobileMenu: React.FC<Props> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  navItems,
}) => {
  return (
    <Dialog
      as="nav"
      className="md:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-mongoose-300 p-6">
        <div className="flex items-center justify-between">
          <a href="#">
            <h2 className="font-bold text-3xl">Gabriela Cresta</h2>
            {/* Waiting for logo */}
            {/* <img
                className="h-8 w-auto"
                src=""
                alt=""
              /> */}
          </a>
          <button
            type="button"
            className="rounded-md text-gray-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="divide-y divide-gray-500/10">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-base font-semibold leading-7 text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileMenu;
