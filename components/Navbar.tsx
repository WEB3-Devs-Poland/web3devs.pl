import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Fragment } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const navigation = [
    [ 'Home', '#' ],
    [ 'About', '#about' ],
    [ 'Start', '#getting-started' ],
    [ 'Community', '#community' ],
    [ 'Docs', '#docs' ],
  ];

  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      <Popover className="bg-black absolute top-0 left-0 right-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6">
            <a href="#" className="flex justify-start lg:w-0 lg:flex-1 text-gray-200 font-semibold text-sm">
              {/* <Image src="/logo.svg" width={42} height={42} /> */}
              <div className="ml-2 my-auto">
                <p>Web3</p>
                <p>DevsPL</p>
              </div>
            </a>

            {/* HAMBURGER MENU */}
            <Popover className="relative md:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="p-2 rounded-md border-1 text-white"
                  >
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 px-4 w-screen min-h-screen right-[-1rem] top-[-1.5rem] bg-black flex flex-col justify-center">
                      <Popover.Button className="absolute text-white top-6 right-4 p-2">
                        <XIcon className="w-6 h-6" />
                      </Popover.Button>
                      <div className="my-auto relative flex flex-col py-4">
                        {navigation.map(([ title, href ]) => (
                          <Popover.Button key={href} className="text-white px-4 py-6 uppercase">
                            <Link href={href}>
                              {title}
                            </Link>
                          </Popover.Button>
                        ))}

                        <Popover.Button className="inline-block px-4 py-6 mt-8 md:text-lg text-base font-medium rounded-md text-indigo-100 hover:text-indigo-50 hover:from-indigo-400 hover:to-indigo-700 bg-gradient-to-r from-indigo-500 to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-200">
                          <Link href="https://dex.fexon.finance">
                            Buy ETF
                          </Link>
                        </Popover.Button>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover.Group as="nav" className="hidden md:flex space-x-8">
              {navigation.map(([ title, href ]) => (
                <a href={href} key={href} className="text-white hover:text-gray-400">
                  {title}
                </a>
              ))}
            </Popover.Group>

            <Popover.Group as="div" className="hidden md:flex justify-end space-x-8 lg:flex-1">
              {/* <a href="#" target="_blank" rel="noopener noreferrer" className="my-auto">
                <Image src="/discord.svg" width={30} height={30} />
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer" className="my-auto">
                <Image src="/twitter.svg" width={30} height={30} />
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer" className="my-auto">
                <Image src="/medium.svg" width={30} height={30} />
              </a> */}
            </Popover.Group>
          </div>
        </div>
      </Popover>
    </div>

  );
};
