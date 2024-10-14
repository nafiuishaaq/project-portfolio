import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/Logo.svg";
import logowhite from "../assets/LogoWhite.svg";
import Button from "./Button";

export default function Header({
  bgColor = "bg-white",
  textColor = "text-white",
}) {
  const location = useLocation();

  const otherPages = location.pathname.split("/")[1];

  const getImage = () => {
    if (!otherPages) {
      return logo;
    } else {
      return logowhite;
    }
  };

  return (
    <Disclosure as="nav" className={`${bgColor} shadow`}>
      <div className="mx-auto max-w-7xl sm:px-6 md:px-40 py-2 md:py-5">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton
              className={`group relative inline-flex items-center justify-center rounded-md p-2 ml-4 ${textColor} hover:${textColor} hover:${textColor} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300`}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center lg:justify-between md:justify-between sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <img alt="Your Company" src={getImage()} className="h-8 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <NavLink
                to="/"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${textColor} hover:border-gray-300`}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${textColor} hover:text-gray-300 hover:border-gray-300`}
              >
                About
              </NavLink>
              <NavLink
                to="/portfolio"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${textColor} hover:border-gray-300 hover:text-gray-300`}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/services"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${textColor} hover:border-gray-300 hover:text-gray-300`}
              >
                Services
              </NavLink>
            </div>

            {otherPages && (
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Button message="Conact Us" textColor="text-white" />
              </div>
            )}
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 pt-2">
          {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
          <NavLink
            to="/"
            className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium ${textColor} hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium ${textColor} hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700`}
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium ${textColor} hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700`}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/services"
            className={`block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium ${textColor} hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700`}
          >
            Services
          </NavLink>
        </div>
        <div className="block pl-3 pr-4">
          {otherPages && <Button message="Conact Us" textColor="text-white" />}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
