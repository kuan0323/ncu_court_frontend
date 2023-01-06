import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import cookies from "js-cookie";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar({
  manageUser,
  manageAdmin,
  manageReservation,
  manageCourt,
}: {
  manageUser: boolean;
  manageAdmin: boolean;
  manageReservation: boolean;
  manageCourt: boolean;
}) {
  const navigation = [
    { name: "會員管理", href: "/userShow", current: manageUser },
    { name: "管理員管理", href: "/adminShow", current: manageAdmin },
    {
      name: "預約紀錄管理",
      href: "/reservationShow",
      current: manageReservation,
    },
    { name: "場地管理", href: "/courtShow", current: manageCourt },
  ];
  const eraseCookies = async () => {
    cookies.remove("service_token");
  };
  return (
    <Disclosure as="nav" className="bg-theme">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-8 w-auto lg:hidden"
                    src="/../public/static/images/kid.png"
                    alt="kid"
                    width={330}
                    height={320}
                  />
                  <Image
                    className="hidden h-8 w-auto lg:block"
                    src="/../public/static/images/kid.png"
                    alt="kid"
                    width={330}
                    height={320}
                  />
                  <p className="ml-1.5 text-xl text-white font-black align-items-center my-1">
                    中央大學場地預約網
                  </p>
                </div>
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-theme2 font-extrabold hover:text-teal-700"
                            : "text-green-50 font-extrabold  hover:text-theme2 ",
                          "px-3 py-2 rounded-md text-sm font-medium text-decoration-none"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-xl bg-theme2 p-1 text-white hover:bg-teal-700"
                  onClick={() => eraseCookies()}
                >
                  <Link href="/" className="text-decoration-none">
                    <p className="mx-4 my-0.5 text-white">登出</p>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-theme2 font-extrabold hover:text-teal-700"
                      : "text-white hover:text-theme2 font-extrabold",
                    "block px-3 py-2 rounded-md text-base font-medium text-decoration-none"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
