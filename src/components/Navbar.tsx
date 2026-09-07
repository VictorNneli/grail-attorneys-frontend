import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <Link to="/" className="text-xl font-serif font-bold text-maroon">
        Grail Attorneys
      </Link>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/practice-areas">Practice Areas</Link>
        <Link to="/team">Our Team</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;