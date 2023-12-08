"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const location = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && e.target !== menuButtonRef.current) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-80 p-1 z-50 shadow">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link className="flex flex-row" href="/" title="home">
            <img src="/logos/temp-logo-rt.png" alt="Logo" className="h-12" />
            <div className="flex flex-col ml-3 text-black text-xl font-medium">
              <span>Quack</span>
              <span>Recruitment & Training</span>
            </div>
          </Link>
        </div>
        {/* Logo and Desktop Links here */}
        <ul className="hidden md:flex space-x-5 pr-2">
          {[
            { path: "/recruitment/listings", label: "Jobs" },
            { path: "/recruitment", label: "Recruitment" },
            { path: "/training", label: "Training" },
            { path: "/about", label: "About" },
            { path: "/contact", label: "Contact" },
          ].map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={`${
                  location === route.path ? "bg-quackred text-white hover:bg-quackred-700" : ""
                } hover:bg-quackred hover:text-white  duration-500  font-medium text-black text-lg p-2 rounded-full`}
                onClick={handleMenuClose}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Icon */}
        <button ref={menuButtonRef} className="md:hidden text-black" onClick={() => setMenuOpen(!isMenuOpen)}>
          <i className="material-icons  pointer-events-none pt-1">menu</i>
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div ref={menuRef} className={`fixed top-0 right-0 h-full bg-black bg-opacity-90 w-64 transform transition-transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        {/* Close button */}
        <div className="flex justify-end p-2 text-white">
          <button onClick={handleMenuClose}>
            <span className="material-icons  pointer-events-none">close</span>
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <ul className="flex flex-col space-y-4 p-4">
          {[
            { path: "/", label: "Home" },
            { path: "/recruitment", label: "Recruitment" },
            { path: "/training", label: "Training" },
            { path: "/about", label: "About" },
            { path: "/legal", label: "Legal" },
            { path: "/contact", label: "Contact" },
          ].map((route) => (
            <li key={route.path}>
              <Link href={route.path} className={`${location === route.path ? "underline" : ""} hover:underline hover:text-white text-white`} onClick={handleMenuClose}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
