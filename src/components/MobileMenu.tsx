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
      as="div"
      className="md:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-mongoose-300 px-6 py-6 sm:max-w-sm sm: shadow-lg">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            {/* Waiting for logo */}
            {/* <img
                className="h-8 w-auto"
                src=""
                alt=""
              /> */}
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            <XMarkIcon
              className="h-6 w-6 hover:text-satin-linen"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-satin-linen"
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
