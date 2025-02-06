"use client"
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    XMarkIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
const navigation = {
    categories: [
        {
            name: 'Security System',
            featured: [
                {
                    name: 'CCTV Camera',
                    href: 'cctv_camera',
                },
                {
                    name: 'IP Phone',
                    href: 'ip_phone',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
                {
                    name: 'IP Camera',
                    href: 'ip_camera',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
                    imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
                },
                {
                    name: 'Access Control Accessories',
                    href: 'accessories',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
                    imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
                },
                {
                    name: 'Home Security',
                    href: 'home_security',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
                    imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
                },
            ],
        },
        {
            name: 'Network',
            featured: [
                {
                    name: 'Network Router',
                    href: '#',
                },
                {
                    name: 'Access Point',
                    href: '#',
                },
                {
                    name: 'Range Extender',
                    href: '#',
                },
                {
                    name: 'Network Switch',
                    href: '#',
                },
                {
                    name: 'Lan Card',
                    href: '#',
                },
                {
                    name: 'Wifi Adapter',
                    href: '#',
                },
                {
                    name: 'Media Converter',
                    href: '#',
                },
                {
                    name: 'Network Cable',
                    href: '#',
                },
                {
                    name: 'Face Plate',
                    href: '#',
                },
                {
                    name: 'Cable LAN',
                    href: '#',
                },
                {
                    name: 'Crimping Tool',
                    href: '#',
                },
                {
                    name: 'Patch Cord',
                    href: '#',
                },

            ],
        },
        {

            name: 'Conference System',
            featured: [
                {
                    name: 'Speaker',
                    href: '#',
                },
                {
                    name: 'Bose',
                    href: '#',
                },
                {
                    name: 'Home Theater Systems',
                    href: '#',
                },
                {
                    name: 'PA System',
                    href: '#',
                },
                {
                    name: ' PA System',
                    href: '#',
                },
                {
                    name: ' Amplifier',
                    href: '#',
                },
                {
                    name: ' Sound System Accessories',
                    href: '#',
                },

            ],
        },
        {
            name: 'Office Iteam',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
                    imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
                    imageAlt: 'Model wearing light heather gray t-shirt.',
                },
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
                    imageAlt:
                        'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
                },
                {
                    name: 'Carry',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
                    imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
                },
            ],
        },
    ],
    pages: [
        { name: 'Our Project', href: '/our_projects' },
        { name: 'About Us', href: '/about' },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    return (
        <div className=" ">
            {/* Mobile menu */}
            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-primary pb-12 shadow-xl">
                                <div className="flex px-4 pb-2 pt-5">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setMobileMenuOpen(false)}

                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex flex-col space-x-2 items-start justify-start ">
                                            {navigation.categories.map((category) => (
                                                <Tab
                                                    key={category.name}
                                                    className={({ selected }) =>
                                                        classNames(
                                                            selected ? 'border-none shadow-lg rounded-lg text-orange-400' : ' border-transparent text-gray-300',
                                                            'flex-1 whitespace-nowrap border-b-2 px-2 py-2 text-base font-medium'
                                                        )
                                                    }
                                                >
                                                    {category.name}
                                                </Tab>
                                            ))}
                                            {navigation.pages.map((page) => (
                                                <Link
                                                    key={page.name}
                                                    href={page.href}>
                                                    <Tab

                                                        className={({ selected }) =>
                                                            classNames(
                                                                selected ? 'border-none shadow-lg rounded-lg text-orange-400' : ' border-transparent text-gray-300',
                                                                'flex-1 whitespace-nowrap border-b-2 px-2 py-2 text-base font-medium'
                                                            )
                                                        }
                                                    >
                                                        {page.name}
                                                    </Tab>
                                                </Link>
                                            ))}
                                        </Tab.List>
                                    </div>
                                    {/* tab panle */}
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map((category) => (
                                            <Tab.Panel key={category.name} className="space-y-12 px-4 py-2">

                                                <div className=" grid grid-cols-2 gap-x-2 gap-y-2 text-gray-300">
                                                    {category.featured.map((item) => (
                                                        <div key={item.name} className="group relative">
                                                            <Link href={`/categoryProducts/${item.href}`} className="mt-2 block text-sm font-medium hover:text-blue-700 text-gray-300">
                                                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                {item.name}
                                                            </Link>

                                                        </div>
                                                    ))}
                                                </div>

                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>

                                </Tab.Group>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Main Navabr */}
            <div className="relative">
                <header className="relative w-full z-10">
                    <nav aria-label="Top">

                        {/* Secondary navigation */}
                        <div className="bg-black bg-opacity-10 backdrop-blur-md backdrop-filter px-2">
                            <div className="mx-auto">
                                <div>
                                    <div className="flex h-16 items-center justify-between">
                                        {/* Logo (lg+) */}
                                        <div className="hidden lg:flex lg:flex-1 lg:items-center">
                                            <Link href="/">
                                                <span className="sr-only">Your Company</span>
                                                <Image width={100} height={100}
                                                    className="h-32 w-auto"
                                                    src={'/logo3.png'}
                                                    alt="logo"
                                                />
                                            </Link>
                                        </div>

                                        <div className="hidden h-full lg:flex">
                                            {/* Flyout menus */}
                                            <Popover.Group className="inset-x-0 bottom-0 px-4">
                                                <div className="flex h-full justify-center space-x-8">

                                                    {navigation.categories.map((category) => (

                                                        <Popover key={category.name} className="flex">
                                                            {({ open }) => (
                                                                <>
                                                                    <div className="relative flex">
                                                                        <Popover.Button
                                                                            onClick={() => setActiveCategory(category.name)}
                                                                            className={` group px-2 relative  text-sm font-medium transition-colors duration-200 ease-out 
                                                                             ${activeCategory === category.name || open
                                                                                    ? "text-orange-400 border-none ring-0 outline-0 "
                                                                                    : "text-gray-300 hover:text-orange-400  "
                                                                                }`}
                                                                        >
                                                                            {category.name}
                                                                            <span
                                                                                className={`absolute top-0 inset-0 w-full rounded-md border-b-[1px] border-b-orange-400 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus:scale-x-100`}
                                                                            ></span>
                                                                        </Popover.Button>
                                                                    </div>

                                                                    <Transition
                                                                        as={Fragment}
                                                                        enter="transition ease-out duration-200"
                                                                        enterFrom="opacity-0"
                                                                        enterTo="opacity-100"
                                                                        leave="transition ease-in duration-150"
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                    >
                                                                        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                                                            <div className="absolute inset-0 bg-primary shadow" aria-hidden="true" />
                                                                            <div className="relative bg-primary opacity-90">
                                                                                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                                                                    <div className="grid grid-flow-row grid-cols-4 gap-x-2 gap-y-4 py-4">
                                                                                        {category.featured.map((item) => (
                                                                                            <div key={item.name} className="group relative">
                                                                                                <Link href={`/categoryProducts/${item.href}`} className="block font-medium hover:text-gray-400 text-white">
                                                                                                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                                                    {item.name}
                                                                                                </Link>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Popover.Panel>
                                                                    </Transition>
                                                                </>
                                                            )}
                                                        </Popover>
                                                    ))}

                                                    {navigation.pages.map((page) => (
                                                        <Link
                                                            key={page.name}
                                                            href={page.href}
                                                            onClick={() => setActiveCategory(page.name)}
                                                            className={` group relative z-10 px-2 flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out 
                                                            ${activeCategory === page.name
                                                                    ? "text-orange-400 border-none ring-0 outline-0 px-2"
                                                                    : "text-gray-300 hover:text-orange-400 "
                                                                }`}
                                                        >
                                                            {page.name}
                                                            <span
                                                                className={`absolute top-0 inset-0 w-full rounded-md border-b-[1px] border-b-orange-400 scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus:scale-x-100 px-2`}
                                                            ></span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </Popover.Group>
                                        </div>

                                        {/* Mobile menu and search (lg-) */}
                                        <div className="flex flex-1 items-center lg:hidden">
                                            <button type="button" className="-ml-2 p-2 text-white" onClick={() => setMobileMenuOpen(true)}>
                                                <span className="sr-only">Open menu</span>
                                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                            </button>

                                            {/* Search */}
                                            <Link href="#" className="ml-2 p-2 text-white">
                                                <span className="sr-only">Search</span>
                                                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                                            </Link>
                                        </div>

                                        {/* Logo (lg-) */}
                                        <Link href="/" className="lg:hidden">
                                            <span className="sr-only">Your Company</span>
                                            <Image width={100} height={100} src="/logo3.png" alt="" className="h-32 w-auto" />
                                        </Link>

                                        <div className="flex flex-1 items-center justify-end">
                                            <Link href="#" className="hidden text-sm font-medium text-white lg:block">
                                                Search
                                            </Link>

                                            <div className="flex items-center lg:ml-8">
                                                <div className="ml-4 flow-root lg:ml-8">
                                                    <Link href="#" className="group -m-2 flex items-center p-2">
                                                        <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                                                        <span className="ml-2 text-sm font-medium text-white">0</span>
                                                        <span className="sr-only">items in cart, view bag</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div >
                            </div >
                        </div >
                    </nav >
                </header >
            </div >
        </div >
    )
}
