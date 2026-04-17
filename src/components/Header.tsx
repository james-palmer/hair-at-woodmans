import { useState, useEffect } from 'react';
import { ScissorsIcon, PhoneIcon, MenuIcon, XIcon } from './Icons';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Find Us', href: '#find-us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream-50 shadow-sm border-b border-rose-200' : 'bg-cream-50/95'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-3 group"
            aria-label="Hair at Woodmans — home"
          >
            <ScissorsIcon
              size={22}
              className="text-rose-800 transition-transform duration-300 group-hover:rotate-12"
            />
            <div>
              <span className="font-serif text-xl text-warm-900 tracking-wide leading-none block">
                Hair at Woodmans
              </span>
              <span className="text-xs text-rose-700 tracking-widest uppercase font-lato font-light">
                Brentwood, Essex
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase font-lato text-warm-800 hover:text-rose-800 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+447771606009"
              className="flex items-center gap-2 bg-rose-800 text-white px-5 py-2.5 text-sm tracking-wide uppercase font-lato font-semibold hover:bg-rose-900 transition-colors duration-200 active:scale-95"
            >
              <PhoneIcon size={15} />
              Call to Book
            </a>
          </nav>

          <button
            className="md:hidden text-warm-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-rose-200 pt-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest uppercase font-lato text-warm-800 hover:text-rose-800 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+447771606009"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-rose-800 text-white px-5 py-3 text-sm tracking-wide uppercase font-lato font-semibold hover:bg-rose-900 transition-colors duration-200"
            >
              <PhoneIcon size={15} />
              07771 606009
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
