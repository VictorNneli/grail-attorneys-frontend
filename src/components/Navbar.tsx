import { Link } from 'react-router-dom';

const linkStyle =
  'font-serif font-bold text-maroon text-lg hover:underline underline-offset-4';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <Link to="/" className="text-xl font-serif font-bold text-maroon">
        Grail Attorneys
      </Link>
      <div className="flex gap-6">
        <Link to="/" className={linkStyle}>Home</Link>
        <Link to="/about" className={linkStyle}>About Us</Link>
        <Link to="/practice-areas" className={linkStyle}>Practice Areas</Link>
        <Link to="/team" className={linkStyle}>Our Team</Link>
        <Link to="/contact" className={linkStyle}>Contact</Link>
        <Link to="/blog" className={linkStyle}>Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;