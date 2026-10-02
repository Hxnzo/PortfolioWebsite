import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';
import pdf from '../Resume.pdf';

const NAV_LINKS = [
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-edge bg-ink/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer font-display text-2xl font-bold text-white"
        >
          HP<span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                spy
                offset={-64}
                duration={500}
                activeClass="text-accent"
                className="cursor-pointer text-sm font-medium text-muted transition-colors duration-200 hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={pdf} target="_blank" rel="noreferrer" className="btn-primary hidden !px-4 !py-2 text-sm md:inline-flex">
            Resume
          </a>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-body transition-colors hover:text-accent md:hidden"
          >
            {menuOpen ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          menuOpen ? 'max-h-96 border-b border-edge bg-ink/95 backdrop-blur-md' : 'max-h-0'
        } overflow-hidden transition-all duration-300`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                offset={-64}
                duration={500}
                onClick={closeMenu}
                className="block cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <a href={pdf} target="_blank" rel="noreferrer" onClick={closeMenu} className="btn-primary w-full text-sm">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
