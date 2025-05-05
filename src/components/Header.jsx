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
          <img src={dark ? dark_logo : light_logo} alt="Spicmacay" width={150} height={200} />
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
            { to: '/contact', label: 'Contact Us' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`mr-5 ${
                location.pathname === to
                  ? 'border-b-2 border-red-500'
                  : ''
              } ${dark ? 'hover:text-blue-500' : 'hover:text-red-500'}`}
            >
              {label}
            </Link>
          ))}

          <a
            href="https://virasat-eta.vercel.app/"
            className={`mr-5 ${dark ? 'hover:text-blue-500' : 'hover:text-black'}`}
          >
            Virasat
          </a>
        </nav>
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
