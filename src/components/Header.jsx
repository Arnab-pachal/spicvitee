import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import dark_logo from './Logos/logo_dark.png';
import light_logo from './Logos/logo_light.png';

const Header = ({ dark, onToggleTheme }) => {
  const location = useLocation();

  return (
    <header
      className={`body-font font-bold ${
        dark
          ? 'bg-slate-800 text-white'
          : 'bg-white text-black border-b border-black'
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <img
            src={dark ? dark_logo : light_logo}
            alt="Spicmacay"
            width={150}
            height={200}
          />
        </Link>

        <nav
          className={`md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center ${
            dark ? 'md:border-red-900' : 'md:border-black'
          } md:border-l`}
        >
          {[
            { to: '/', label: 'Home' },
            { to: '/gallery', label: 'Gallery' },
            { to: '/team', label: 'Team' },
            { to: '/events', label: 'Events' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`mr-5 ${
                location.pathname === to ? 'border-b-2 border-red-500' : ''
              } ${dark ? 'hover:text-blue-500' : 'hover:text-red-500'}`}
            >
              {label}
            </Link>
          ))}

          {/* Virasat Dropdown */}
          <div className="relative group mr-5">
            <button
              className={`focus:outline-none ${
                dark ? 'hover:text-blue-500' : 'hover:text-black'
              }`}
            >
              Virasat
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg z-10 min-w-[150px]">
              <a
                href="https://virasat-eta.vercel.app/"
                className="block px-4 py-2 hover:bg-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Virasat 2024
              </a>
              <a
                href="https://virasat-eta.vercel.app/"
                className="block px-4 py-2 hover:bg-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Virasat 2025
              </a>
            </div>
          </div>

          {/* Contact Us Link */}
          <Link
            to="/pixels"
            className={`mr-5 ${
              location.pathname === '/pixels'
                ? 'border-b-2 border-red-500'
                : ''
            } ${dark ? 'hover:text-blue-500' : 'hover:text-red-500'}`}
          >
            Pixels
          </Link>
          <Link
            to="/contact"
            className={`mr-5 ${
              location.pathname === '/contact'
                ? 'border-b-2 border-red-500'
                : ''
            } ${dark ? 'hover:text-blue-500' : 'hover:text-red-500'}`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Theme Toggle Button */}
        <button
          className={`inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 ${
            dark
              ? 'bg-gray-100 hover:bg-gray-200 text-black'
              : 'bg-gray-200 hover:bg-gray-300 text-black border border-black'
          }`}
          onClick={onToggleTheme}
        >
          <span className="material-symbols-outlined">
            {dark ? 'Light' : 'Dark'}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
