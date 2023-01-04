import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar({
  mainPage,
  myReserve,
  myAccount,
}: {
  mainPage: boolean;
  myReserve: boolean;
  myAccount: boolean;
}) {
  const navigation = [
    { name: "首頁", href: "/home", current: mainPage },
    { name: "我的預約", href: "#", current: myReserve },
    { name: "我的帳戶", href: "#", current: myAccount },
  ];
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
                    src="/static/images/kid.png"
                    alt="kid"
                    width={330}
                    height={320}
                  />
                  <Image
                    className="hidden h-8 w-auto lg:block"
                    src="/static/images/kid.png"
                    alt="kid"
                    width={330}
                    height={320}
                  />
                  <p className="ml-1.5 text-xl text-white font-black">
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
                            : "text-white hover:text-theme2 font-extrabold",
                          "px-3 py-2 rounded-md text-sm font-medium"
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
                  className="rounded-xl bg-theme2 p-1 text-white hover:ring-2 hover:ring-teal-700"
                >
                  <a href="#">
                    <p className="mx-4 my-0.5 text-white">登出</p>
                  </a>
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
                      ? "text-theme2 font-extrabold"
                      : "text-white hover:text-theme2 font-extrabold",
                    "block px-3 py-2 rounded-md text-base font-medium"
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
