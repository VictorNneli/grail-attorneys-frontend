import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/practice-areas', label: 'Practice Areas' },
  { to: '/team', label: 'Our Team' },
  { to: '/contact', label: 'Contact' },
  { to: '/blog', label: 'Blog' }
];

const linkStyle =
  'font-serif font-bold text-maroon text-lg hover:underline underline-offset-4';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-8 py-4">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-xl font-serif font-bold text-maroon"
        >
          Grail Attorneys
        </Link>

        <div className="hidden lg:flex gap-6">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className={linkStyle}>
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden text-maroon"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden flex flex-col gap-4 px-8 pb-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={linkStyle}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;