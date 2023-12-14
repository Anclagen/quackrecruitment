"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const location = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Define navigation items with dropdowns
  const navItems = [
    { path: "/", label: "Home" },
    {
      label: "Training",
      dropdown: [
        { path: "/training", label: "Training" },
        { path: "/training/cscs", label: "CSCS" },
        { path: "/training/customer-service-administration", label: "Customer Service & Administration" },
        { path: "/training/food-and-hygiene", label: "Food & Hygiene" },
        { path: "/training/sia", label: "SIA" },
        { path: "/training/welding", label: "Welding" },
        { path: "/training/fork-lift", label: "Forklift Truck (FLT)" },
      ],
    },
    {
      label: "Recruitment",
      dropdown: [
        { path: "/recruitment", label: "Recruitment" },
        { path: "/recruitment/listings", label: "Jobs" },
        { path: "/recruitment/permanent", label: "Permanent Recruitment" },
        { path: "/recruitment/temporary", label: "Temporary Recruitment" },
        { path: "/recruitment/on-site-managed", label: "On Site Managed Services" },
      ],
    },
    {
      label: "About",
      dropdown: [
        { path: "/about", label: "About Us" },
        { path: "/legal", label: "Legal" },
        { path: "/legal/privacy-policy", label: "Privacy Policy" },
      ],
    },
    { path: "/contact/register", label: "Register" },
    { path: "/contact", label: "Contact" },
  ];

  // Update toggleDropdown function
  const toggleDropdown = (dropdownLabel) => {
    setOpenDropdown(openDropdown === dropdownLabel ? null : dropdownLabel);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
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
        <ul className="hidden lg:flex content-center space-x-5 pr-2">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.dropdown ? (
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`${openDropdown === item.label ? "bg-quackred-200" : ""} font-medium text-black text-lg p-2 py-1 rounded-full flex hover:bg-quackred hover:text-white`}
                  >
                    {item.label}
                    <span className="m-0 rounded-full ps-1 material-symbols-outlined">{openDropdown === item.label ? "expand_more" : "expand_less"}</span>
                  </button>
                  {openDropdown === item.label && (
                    <ul className="absolute bg-gray-50 shadow-lg bg-opacity-90 shadow-quackred-100 mt-2 rounded-lg w-content pd-1 right-0 w-fit">
                      {item.dropdown.map((dropdownItem) => (
                        <li key={dropdownItem.path} className="p-2">
                          <Link
                            href={dropdownItem.path}
                            className={`${
                              location === dropdownItem.path ? "bg-quackred text-white hover:bg-quackred-700" : ""
                            } hover:bg-quackred hover:text-white  duration-500  font-medium text-black text-lg p-2 rounded-full whitespace-nowrap`}
                            onClick={handleMenuClose}
                          >
                            {dropdownItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <div className="pt-1">
                  <Link
                    href={item.path}
                    className={`${
                      location === item.path ? "bg-quackred text-white hover:bg-quackred-700" : ""
                    } hover:bg-quackred hover:text-white my-auto d-block duration-500 font-medium text-black text-lg p-2 rounded-full`}
                    onClick={handleMenuClose}
                  >
                    {item.label}
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
        {/* Mobile Menu Icon */}
        <button ref={menuButtonRef} className="lg:hidden text-black mr-1" onClick={() => setMenuOpen(!isMenuOpen)}>
          <i className="material-icons  pointer-events-none pt-1">menu</i>
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-screen overflow-y-auto bg-white bg-opacity-90 w-full transform transition-transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
      >
        {/* Close button */}
        <div className="flex justify-end p-2  me-5 mt-3">
          <button onClick={handleMenuClose}>
            <span className="material-icons pointer-events-none">close</span>
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <ul className="flex flex-col space-y-4 p-4">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.dropdown ? (
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`${openDropdown === item.label ? "bg-quackred-200" : ""} hover:bg-quackred hover:text-white font-medium text-black text-lg p-2 rounded-full flex`}
                  >
                    {item.label}
                    <span className="material-symbols-outlined">{openDropdown === item.label ? "expand_more" : "expand_less"}</span>
                  </button>
                  {openDropdown === item.label && (
                    <ul className="mx-3 border-b-2 border-t-2 mt-1 border-quackred">
                      {item.dropdown.map((dropdownItem) => (
                        <li key={dropdownItem.path} className="my-2">
                          <Link
                            href={dropdownItem.path}
                            className={`${
                              location === dropdownItem.path ? "bg-quackred  hover:bg-quackred-700" : ""
                            } hover:bg-quackred hover:text-white  duration-500  font-medium text-lg p-2 rounded-full whitespace-nowrap`}
                            onClick={handleMenuClose}
                          >
                            {dropdownItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.path}
                  className={`${
                    location === item.path ? "bg-quackred text-white hover:bg-quackred-700" : ""
                  } hover:bg-quackred hover:text-white my-auto d-block duration-500 font-medium text-lg p-2 rounded-full`}
                  onClick={handleMenuClose}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
