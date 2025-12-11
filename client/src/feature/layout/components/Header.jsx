import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { nav_link } from "../../../constant";
import logo from "../../../assets/logo.webp";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-50 font-text ${
          scrolled
            ? "bg-white backdrop-blur-sm border-b border-gray-200 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto w-full flex justify-between items-center py-4 px-3 sm:px-6 md:px-8 lg:px-12">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Help Ethiopia Logo"
              className="w-10 sm:w-14 h-auto md:w-16"
            />
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-bold text-blue leading-tight">
                HELP Ethiopia
              </span>
              <span className="text-[8px] sm:text-xs text-blue">
                Making a Difference
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav_link.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2.5 text-sm font-medium text-blue transition-colors duration-300 group"
              >
                <span className="relative z-10">{link.label}</span>
                {/* Underline animation */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/donate">
              <button className="px-6 py-2.5 rounded-lg text-sm font-medium text-blue bg-gold cursor-pointer">
                Donate Now
              </button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-blue cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={24} weight="bold" />
            ) : (
              <List size={24} weight="bold" />
            )}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden   ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col py-4 px-6 gap-2 text-center bg-white">
            {nav_link.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-xs text-blue font-medium"
              >
                {link.label}
              </Link>
            ))}

            <Link to="/donate" onClick={() => setOpen(false)}>
              <button className="w-full mt-2 px-6 py-3 rounded-lg text-xs font-semibold text-blue bg-gold transition-all duration-300 shadow-md">
                Donate Now
              </button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="h-20 md:h-24" />
    </>
  );
};

export default Header;
