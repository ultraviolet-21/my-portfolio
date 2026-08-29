import React, { useState } from "react";

interface NavLink {
  name: string;
  href: string;
}

const navlinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

// Navbar component with responsive design and toggle functionality for mobile view
 const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-rose-300 border-b border-rose-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <span className="text-white font-bold text-xl">My Portfolio</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            
                            {navlinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-white hover:bg-slate-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="-mr-2 flex md:hidden"> 
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-rose-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-rose-800 focus:ring-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        {isOpen && (
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navlinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white hover:bg-slate-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        )}
    </nav>
  );
}

export default Navbar;