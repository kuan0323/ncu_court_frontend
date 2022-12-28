import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function SideBar(){
    return(
    
        <Disclosure as="nav" className="w-60">
        {({ open }) =>(
            <>
                <div className="">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                    <div className="sm:px-6 lg:px-8 w-60 h-full shadow-md bg-[#69CBBF] px-1 absolute hidden sm:block">
                    
                        <ul className="relative">
                            <li className="relative">
                                <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="userShow" data-mdb-ripple="true" data-mdb-ripple-color="dark">會員管理</a>
                            </li>
                            <li className="relative">
                                <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="adminShow" data-mdb-ripple="true" data-mdb-ripple-color="dark">管理員管理</a>
                            </li>
                            <li className="relative">
                                <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="reservationShow" data-mdb-ripple="true" data-mdb-ripple-color="dark">預約紀錄管理</a>
                            </li>
                            <li className="relative">
                                <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="courtShow" data-mdb-ripple="true" data-mdb-ripple-color="dark">場地管理</a>
                            </li>
                        </ul>
                        <div className="flex flex-shrink-0 justify-center  w-full p-4">
                            <button type="button" className="inline-block px-6 py-2.5 bg-[#40948A] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none rounded-full focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">登出</button>
                        </div>
                    </div>
                </div>
            <Disclosure.Panel className="sm:hidden w-60">
                <div className="sm:px-6 lg:px-8 w-60 h-full shadow-md bg-[#69CBBF] px-1 absolute">
                
                    <ul className="relative">
                        <li className="relative">
                            <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="userShow" data-mdb-ripple="true" data-mdb-ripple-color="dark">會員管理</a>
                        </li>
                        <li className="relative">
                            <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="adminShow" data-mdb-ripple="true" data-mdb-ripple-color="dark">管理員管理</a>
                        </li>
                        <li className="relative">
                            <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="reservationShow" data-mdb-ripple="true" data-mdb-ripple-color="dark">預約紀錄管理</a>
                        </li>
                        <li className="relative">
                            <a className="flex items-center text-base py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="courtShow" data-mdb-ripple="true" data-mdb-ripple-color="dark">場地管理</a>
                        </li>
                        </ul>
                        <div className="flex flex-shrink-0 justify-center  w-full p-4">
                            <button type="button" className="inline-block px-6 py-2.5 bg-[#40948A] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none rounded-full focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">登出</button>
                        </div>

                </div>
            </Disclosure.Panel>
            </>
        )}
        </Disclosure>
        
);
}